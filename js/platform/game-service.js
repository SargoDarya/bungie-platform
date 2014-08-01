(function() {
  bungieNetPlatform.gameService = {
    dataStore: [],
    gameData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.gameService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.gameService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.gameService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.gameService.dataStore["Set_" + a.id] = a
      }
    },
    GetPlayerGamesById: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Game/GetPlayerGamesById/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    ReachModelSneakerNet: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Game/ReachModelSneakerNet/" + encodeURIComponent(f) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    }
  }
})(jQuery);