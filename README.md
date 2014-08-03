# Bungie Platform API

This is the platform.js file from bungie.net used to do nearly everything. It's reverse engineered and made
available as a node.js module.

Note: This is not maintained by bungie.

## Requirements

Node 1.10.x or later

## Installing the module

There are 2 ways to install the library. If you want to use this module in your own application.

    npm install bungie-platform --save

Or if you just want to check out the API:

    git clone git@github.com:SargoDarya/bungie-platform.git
    cd bungie-platform
    node sample
    
Then head to `http://localhost:8080/api/` and you can see all exposed calls.
 
## Getting started

To use the platform just require it and initialize it with a valid cookie. For the
API to work correctly you need the bungledid, bungled and the bungleatk values from
the cookie.

    var BungiePlatform = require('bungie-platform');
    var platform = BungiePlatform(YourCookieString);
    
    var successCallback = errorCallback = function(data) { console.log(data) };
    
    platform.userService.GetCurrentUser(successCallback, errorCallback, null)
      .done(function(data) {
        // This is called on success    
      })
      .fail(function(err) {
        // This is called on error
      });

Note that almost all if not every platform method returns a deferred while also calling
success and error callbacks. There are methods which don't require a valid cookie (consider them public)
and there are methods which require a valid logged in user (consider them private).

## API Docs

As the platform.js is currently just reverse engineered from a minified file and a bit modified to
be able to use it in node.js there are no complete API docs. I'm still in the process of fixing that
up so the API docs are actually usable but 300 methods is a lot to document and reverse engineer.

## Contribute

All contributions are welcome. If you want to contribute, follow these steps:

- Look for something you want to contribute

- Fork the repository

- Work on the feature or enhancement until it is completed

- Do a Pull Request and give a short explanation of what you did

If everything is fine the pull request gets merged.

## Disclaimer

This project is not affiliated with, maintained, authorized, endorsed or sponsored by Bungie.