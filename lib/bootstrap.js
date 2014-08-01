var Platform = require('./platform');
var extend = require('extend');
var Deferred = require('jquery-deferred');
var request = require('request');

module.exports = function(document) {
  /**
   * Maintain a wrapper for ajax calls
   */
  var j = request.jar();
  var cookie = document.cookie.split(';');

  for (var i = 0; i < cookie.length; i++) {
    j.setCookie(request.cookie(cookie[i]), 'http://www.bungie.net', function(){ /*noop*/ });
  }

  var requestWrapper = function(options) {
    var reqOptions = {
      url: options.url,
      dataType: options.dataType,
      headers: options.headers,
      jar: j,
      json: true
    };

    request(reqOptions, function(err, res, body) {
      if (!!err) {
        if (typeof options.error == 'function') {
          return options.error(err);
        }
      }

      if (typeof options.success == 'function') {
        options.success(body, "success", res);
      }
    });
  };

  var platform = Platform(
    {
      fn: {},
      extend: extend,
      Deferred: Deferred.Deferred,
      ajax: requestWrapper,
      inArray: function(a, b) {
        return (b.indexOf(a) > -1);
      }
    },
    {
      WebAuthCookieDomain: ".bungie.net",
      WebAuthCookieName: "bungleatk",
      StaticHostEnabled: true,
      StaticHost: "static01.bungie.net",
      ContentVersion: "cv=3983588666&av=1890151607"
    },
    document);

  platform.platformSettings.initialize({
    platformUrl: "http://www.bungie.net/Platform",
    baseUrl: "/",
    currentLocale: 'en',
    locInherit: true,
    isMobileDevice: false,
    isTouchDevice: false,
    renderContentEditLinks: 'false' == 'true',
  	internalLinkRegex: /https?\:\/\/(((www)|(betanext)|(alpha)|(nike)|(bnetdev)|(bnetint)|(static-internal)|(local-static)|(static01))\.bungie(store)?\.(net|com))/gi
  });

  return platform;
};