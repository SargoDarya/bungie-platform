(function(a) {
  bungieNetPlatform.userService = {
    dataStore: [],
    userData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.userService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.userService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.userService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.userService.dataStore["Set_" + a.id] = a
      }
    },
    CreateUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/CreateUser/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    UpdateUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateUser/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    UpdateUserAdmin: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateUserAdmin/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    UpdateNotificationSetting: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/Notification/Update/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    EditSuccessMessageFlags: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/MessageFlags/Success/Update/" + encodeURIComponent(f) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    GetCurrentUser: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieNetUser/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetCountsForCurrentUser: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetCounts/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetBungieNetUserById: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieNetUserById/" + encodeURIComponent(f) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetUserAliases: function(h, f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetUserAliases/" + encodeURIComponent(h) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, g)
    },
    SearchUsers: function(h, f, g, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsers/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&q=" + encodeURIComponent(h);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetBungieAccount: function(h, g, f, i, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetBungieAccount/" + encodeURIComponent(h) + "/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, i)
    },
    SearchUsersPaged: function(g, h, f, i, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsersPaged/" + encodeURIComponent(g) + "/" + encodeURIComponent(h) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, i)
    },
    SearchUsersPagedV2: function(h, i, g, f, j, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/SearchUsersPaged/" + encodeURIComponent(h) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, j)
    },
    GetNotificationSettings: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetNotificationSettings/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetCredentialTypesForAccount: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetCredentialTypesForAccount/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetAvailableAvatars: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableAvatars/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetAvailableAvatarsAdmin: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableAvatarsAdmin/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetAvailableThemes: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetAvailableThemes/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, g)
    },
    RegisterMobileAppPair: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/RegisterMobileAppPair/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    UnregisterMobileAppPair: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UnregisterMobileAppPair/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    UpdateStateInfoForMobileAppPair: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/UpdateStateInfoForMobileAppPair/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetMobileAppPairings: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMobileAppPairings/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.userService.userData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.userService.userData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetMobileAppPairingsUncached: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMobileAppPairingsUncached/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetSignOutUrl: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetSignOutUrl/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    DemonwareLinkOverride: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/DemonwareLinkOverride/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetUserMembershipIds: function(d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/GetMembershipIds/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&excludebungienet=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    SetAcknowledged: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/User/Acknowledged/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, f)
    }
  }
})(jQuery);