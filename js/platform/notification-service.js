(function() {
  bungieNetPlatform.notificationService = {
    dataStore: [],
    notificationData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.notificationService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.notificationService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.notificationService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.notificationService.dataStore["Set_" + a.id] = a
      }
    },
    GetRecentNotifications: function(d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/GetRecent/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetRecentNotificationCount: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/GetCount/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    ResetNotification: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Notification/Reset/",
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