(function(a) {
  bungieNetPlatform.coreService = {
    dataStore: [],
    coreData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.coreService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.coreService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.coreService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.coreService.dataStore["Set_" + a.id] = a
      }
    },
    HelloWorld: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "//HelloWorld/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    CacheTest: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "//CacheTest/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    TestUnhandledError: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "//TestUnhandledError/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetAvailableLocales: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "//GetAvailableLocales/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.coreService.coreData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetCommonSettings: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "//Settings/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.coreService.coreData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetGlobalAlert: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "//GlobalAlert/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.coreService.coreData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.coreService.coreData.setCacheItem(a);
        f(a)
      }, g)
    }
  }
})(jQuery);