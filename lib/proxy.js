var fs = require('fs');
var request = require('request');
var globals = require('../lib/globals');

var platformURL = 'http://www.bungie.net/platform';

var globalsRes = JSON.stringify(globals);

var jsonRequest = function(opts, cookieData, callback) {
  var jar = request.jar();

  for (var k in cookieData) {
    var data = k+'='+cookieData[k];
    var c = request.cookie(data);
    jar.setCookie(c, 'http://www.bungie.net');
  }

  opts.jar = jar;
  opts.url = platformURL + opts.url;

  request(opts, function (error, response, body) {
    callback(body);
  });
};

function filterCookie(cookie) {
  var filtered = {};

  for (var k in cookie) {
    if (['bungled', 'bungleatk', 'bungledid', 'bunglefrogblastventcore'].indexOf(k) > -1) {
      filtered[k] = cookie[k];
    }
  }

  return filtered;
}


var Proxy = function(router) {

  fs.readFile('./endpoints.txt', { encoding: 'utf-8' }, function(err, data) {
    var endpoints = data.split('\r\n');
    var ep = [];

    for (var i = 0; i < endpoints.length; i++) {
      var endpoint = endpoints[i].replace(/\[([a-zA-Z]+)\]/gi, function(a, b) {
        return ':'+b
      }).replace(/http\:\/\/www\.bungie\.net\/platform/, '');

      router.get(endpoint, function(req, res) {
        var cookieData = filterCookie(req.cookies);

        jsonRequest({
          url: req.url,
          method: 'GET',
          headers: {
            'X-API-Key': req.headers['x-api-key'],
            'x-csrf': req.headers['x-csrf'],
            'X-Requested-With': 'XMLHttpRequest'
          }
        }, cookieData, function(data) {
          res.send(data);
          res.end();
        });
      });

      router.post(endpoint, function(req, res) {
        var cookieData = filterCookie(req.cookies);

        jsonRequest({
          url: req.url,
          method: 'POST',
          json: req.body,
          headers: {
            'X-API-Key': req.headers['x-api-key'],
            'x-csrf': req.headers['x-csrf'],
            'X-Requested-With': 'XMLHttpRequest'
          }
        }, cookieData, function(data) {
          res.send(data);
          res.end();
        });
      });

      ep.push(endpoint);
    }

    router.get('/endpoints', function(req, res) {
      res.send(JSON.stringify({
        endpoints: ep
      }));
      res.end();
    });

    router.get('/globals', function(req, res) {
      res.send(globals);
      res.end();
    });

  });

};

module.exports = Proxy;