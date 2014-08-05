var express = require('express');
var API = require('./lib/api');
var Platform = require('./platform');
var router = express.Router();

/** @type Number **/
var PORT = process.env.PORT || 8080;

/** @type bungieNetPlatform **/
var platform = Platform("bungled=8025883854554820751");

// Setup server
var app = express();

// general server settings
app.set('view engine', 'jade');
app.set('views', './views');

// express middlewares
app.use(express.static('./public'));
app.use('/api', router);

// proxy router
var proxyRouter = express.Router();
app.use('/proxy', proxyRouter);

/** @type API **/
api = new API(router, platform);

app.listen(PORT, function() {
  console.log('Magic happening on port '+PORT);
});