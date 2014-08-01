var express = require('express');
var bootstrap = require('./lib/bootstrap');
var noop = function(){};

var document = {
  cookie: ""
};

var platform = bootstrap(document);

var ignoredMethods =
  ['data', 'contentData', 'dataStore', 'getCacheItem',
  'setCacheItem', 'getCacheSet', 'setCacheSet', 'tokensData', 'destinyData',
  'coreData', 'bugsData', 'adminData', 'gameData', 'ignoreData', 'activityData',
  'forumData', 'externalSocialData', 'notificationData', 'messageData', 'userData',
  'jsonpData'];

function getSignature(method) {
  return method.toString().split('{')[0].replace(/function /gi, '');
}

function recurse(obj, prefix) {
  var o = [];

  for (var k in obj) {
    var oType = typeof obj[k]
    if (ignoredMethods.indexOf(k) === -1) {
      if (oType === 'object') {
        o.push({
          name: k,
          childs: recurse(obj[k])
        });
      } else if (oType === 'function'){
        o.push({
          name: k,
          signature: getSignature(obj[k]),
          childs: []
        });
      }
    }
  }

  return o;
}
var methods = recurse(platform);

// Setup server
var app = express();
var router = express.Router();

// general server settings
app.set('view engine', 'jade');
app.set('views', './views');

// middlewares to use
app.use(express.static('./public'));

router.get('/', function(req, res) {
  res.render('listing', {
    methods: methods
  });
});

router.get('/current-user', function(req, res) {
  platform.userService.GetCurrentUser(noop, noop)
    .then(function(a, b, c) {
      res.send(JSON.stringify(a), null, true);
      res.end();
    }).fail(function(a, b, c) {
      res.set('Content-Type', 'application/json');
      res.send('Error fetching user');
      res.end();
    });
});

app.use('/api', router);


var port = 80;

app.listen(port, function() {
  console.log('Server listening on port '+port);
});

//module.exports = platform;