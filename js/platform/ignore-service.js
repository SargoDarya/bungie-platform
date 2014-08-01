(function() {
  bungieNetPlatform.ignoreService = {
    dataStore: [],
    ignoreData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.ignoreService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.ignoreService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.ignoreService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.ignoreService.dataStore["Set_" + a.id] = a
      }
    },
    GetIgnoreStatusForPost: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/Posts/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, f)
    },
    GetIgnoreStatusForUser: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/Users/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetIgnoresForUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyIgnores/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    IgnoreItem: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/Ignore/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    UnignoreItem: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/Unignore/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    MyLastReport: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Ignore/MyLastReport/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    }
  }
})(jQuery);