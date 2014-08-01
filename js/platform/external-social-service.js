(function(a) {
  bungieNetPlatform.externalSocialService = {
    dataStore: [],
    externalSocialData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.externalSocialService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.externalSocialService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.externalSocialService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.externalSocialService.dataStore["Set_" + a.id] = a
      }
    },
    GetAggregatedSocialFeed: function(i, g, f, h, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/ExternalSocial/GetAggregatedSocialFeed/" + encodeURIComponent(i) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&types=" + encodeURIComponent(g);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.externalSocialService.externalSocialData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.externalSocialService.externalSocialData.setCacheItem(a);
        f(a)
      }, h)
    }
  }
})(jQuery);