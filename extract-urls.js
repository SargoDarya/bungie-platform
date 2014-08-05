var fs = require('fs');

var regex = new RegExp();

var file = fs.readFileSync('./lib/platform.js', {encoding: 'utf-8'});

var matches = file.match(/(var )?[a-z] \= bungieNetPlatform\.platformSettings\.platformUrl \+ \"(.*?)(?:,|;)/gi);

for (var i = 0; i < matches.length; i++) {
  // replace url
  matches[i] = matches[i].replace(/(var )?[a-z] \= bungieNetPlatform\.platformSettings\.platformUrl \+ \"/gi, "http://www.bungie.net/platform");

  // replace params
  matches[i] = matches[i].replace(/\" \+ encodeURIComponent\(([a-zA-Z]+)\) \+ \"/gi, function(a, b, c) {
    return '['+b+']';
  });

  // clean of the end of the urls
  matches[i] = matches[i].replace(/\"(\,|\;)/gi, '');

}

fs.writeFileSync('endpoints.txt', matches.join('\r\n'));