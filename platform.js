var bootstrap = require('./lib/bootstrap');

module.exports = function(cookieVal) {
  return bootstrap({
    cookie: cookieVal
  });
};