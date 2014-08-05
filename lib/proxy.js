var fs = require('fs');
var request = require('request');

var platformURL = 'http://www.bungie.net/platform';

var jsonRequest = function(path, callback) {
  var opts = {
    url: platformURL+path
  }

  request(opts, function (error, response, body) {
    callback(body);
  });
}


var Proxy = function(router) {

  fs.readFile('./endpoints.txt', { encoding: 'utf-8' }, function(err, data) {
    var endpoints = data.split('\r\n');
    var ep = [];

    for (var i = 0; i < endpoints.length; i++) {
      var endpoint = endpoints[i].replace(/\[([a-zA-Z])\]/gi, function(a, b) {
        return ':'+b
      }).replace(/http\:\/\/www\.bungie\.net\/platform/, '');

      router.get(endpoint, function(req, res) {
        jsonRequest(req.url, function(data) {
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

  });

};

module.exports = Proxy;