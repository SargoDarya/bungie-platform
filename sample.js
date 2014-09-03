var express = require('express');
var API = require('./lib/api');
var Proxy = require('./lib/proxy');
var Platform = require('./platform');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

// Different routers
var router = express.Router();
var proxyRouter = express.Router();

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
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser());
app.use(cookieParser());
app.use(express.static('./public'));
app.use('/api', router);
app.use('/proxy', proxyRouter);

/** @type API **/
var api = new API(router, platform);

var proxy = new Proxy(proxyRouter);

app.listen(PORT, function() {
  console.log('Magic happening on port '+PORT);
});