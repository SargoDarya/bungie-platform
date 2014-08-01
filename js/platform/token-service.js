(function() {
  bungieNetPlatform.tokensService = {
    dataStore: [],
    tokensData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.tokensService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.tokensService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.tokensService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.tokensService.dataStore["Set_" + a.id] = a
      }
    },
    ClaimToken: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/Claim/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetCurrentUserOfferHistory: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/OfferHistory/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetCurrentUserThrottleState: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ThrottleState/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    VerifyAge: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/VerifyAge/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    ConsumeMarketplacePlatformCodeOffer: function(e, d, f, g, h, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ConsumeMarketplacePlatformCodeOffer/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        g(a)
      }, h)
    },
    MarketplacePlatformCodeOfferHistory: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/MarketplacePlatformCodeOfferHistory/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    ApplyOfferToCurrentDestinyMembership: function(d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/ApplyOffersToCurrentDestinyMembership/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&offers=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    DestinyUnlockHistory: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Tokens/DestinyUnlockHistory/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    }
  }
})(jQuery);