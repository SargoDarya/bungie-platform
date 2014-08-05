var MethodParser = require('./method-parser');

// We define a no-op function for callbacks
// because all methods return a deferred
var noop = function(){};

/**
 *
 * @param router {router}
 * @param platform {bungieNetPlatform}
 */
var API = function(router, platform) {

  var methods = MethodParser.recurse(platform);

  router.get('/', function(req, res) {
    res.render('listing', {
      methods: methods
    });
  });

  router.get('/current-user', function(req, res) {
    platform.userService.GetCurrentUser(noop, noop)
      .then(function(a, b, c) {
        res.render('current-user', { content: JSON.stringify(a, null, 2) });
      }).fail(function(a, b, c) {
        res.render('current-user', { content: 'something was fucked up...' });
      });
  });

  router.get('/explorer', function(req, res) {
    res.render('explorer');
  });

  // map some methods
  (function() {
    var methods = MethodParser.getAllMethods(platform);

    for (var i = 0; i < methods.length; i++) {
      var method = methods[i].split('.');
      var fn;
      var len = 0;

      if (method.length === 2) {
        fn = platform[method[0]][method[1]];
      } else {
        fn = platform[method[0]];
      }

      len = fn.length;

      if (len === 3) {
        router.get('/platform/'+method[0]+'/'+method[1], (function(fn, methodName){
          return function(req, res) {
            fn(noop, noop, null)
              .then(function(response) {
                res.render('generic-content', {
                  platformCall: methodName,
                  content: JSON.stringify(response, null, 2)
                });
              }).fail(function(error) {
                res.render('generic-content', {
                  platformCall: methodName,
                  content: 'something was fucked up...',
                  error: error
                });
              });
          }
        })(fn, methods[i]));
      }
    }
  })();

};

module.exports = API;