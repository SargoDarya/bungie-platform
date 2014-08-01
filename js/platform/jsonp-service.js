(function() {
  bungieNetPlatform.jsonpService = {
    dataStore: [],
    jsonpData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.jsonpService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.jsonpService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.jsonpService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.jsonpService.dataStore["Set_" + a.id] = a
      }
    },
    GetCurrentUser: function(d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/JSONP/GetBungieNetUser/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&callback=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    }
  }
})(jQuery);