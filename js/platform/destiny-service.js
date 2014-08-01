(function(a) {
  bungieNetPlatform.destinyService = {
    dataStore: [],
    destinyData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.destinyService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.destinyService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.destinyService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.destinyService.dataStore["Set_" + a.id] = a
      }
    },
    GetDestinyManifest: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Manifest/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetDestinySingleDefinition: function(i, j, g, f, h, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Manifest/" + encodeURIComponent(i) + "/" + encodeURIComponent(j) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&definitions=" + encodeURIComponent(g);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
        f(a)
      }, h)
    },
    SearchDestinyPlayer: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/SearchDestinyPlayer/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetAccount: function(e, d, f, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetCharacterSummary: function(e, d, g, f, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetCharacter: function(e, d, g, f, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Complete/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetCharacterInventory: function(e, d, g, f, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Inventory/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetItemDetail: function(f, d, h, e, g, i, j, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(f) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(h) + "/Inventory/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(g);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        i(a)
      }, j)
    },
    GetCharacterActivities: function(e, d, g, f, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Activities/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetCharacterProgression: function(e, d, g, f, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(e) + "/Account/" + encodeURIComponent(d) + "/Character/" + encodeURIComponent(g) + "/Progression/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetAllVendorsForCurrentCharacter: function(d, f, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/MyAccount/Character/" + encodeURIComponent(f) + "/Vendors/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetVendorSummariesForCurrentCharacter: function(d, f, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/MyAccount/Character/" + encodeURIComponent(f) + "/Vendors/Summaries/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetVendorForCurrentCharacter: function(d, f, g, e, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/MyAccount/Character/" + encodeURIComponent(f) + "/Vendor/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetAdvisorsForCurrentCharacter: function(d, f, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/MyAccount/Character/" + encodeURIComponent(f) + "/Advisors/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    EquipItem: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/EquipItem/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetHistoricalStatsDefinition: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Definition/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetHistoricalStats: function(e, d, f, h, n, l, g, j, i, k, m, o, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&periodType=" + encodeURIComponent(h) + "&modes=" + encodeURIComponent(n) + "&groups=" + encodeURIComponent(l) + "&monthstart=" + encodeURIComponent(g) + "&monthend=" + encodeURIComponent(j) + "&daystart=" + encodeURIComponent(i) + "&dayend=" + encodeURIComponent(k);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        m(a)
      }, o)
    },
    GetActivityHistory: function(f, e, g, k, i, l, d, h, j, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/ActivityHistory/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&mode=" + encodeURIComponent(k) + "&count=" + encodeURIComponent(i) + "&page=" + encodeURIComponent(l) + "&activityDefinitions=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, j)
    },
    GetUniqueWeaponHistory: function(f, d, g, e, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/UniqueWeapons/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemDefinitions=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetLeaderboards: function(e, d, g, f, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Leaderboards/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&modes=" + encodeURIComponent(g);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, h)
    },
    GetLeaderboardsForPsn: function(e, g, d, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/LeaderboardsForPsn/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&modes=" + encodeURIComponent(e) + "&code=" + encodeURIComponent(g);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, f)
    },
    GetLeaderboardsForCharacter: function(e, d, f, h, g, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/Leaderboards/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&modes=" + encodeURIComponent(h);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, i)
    },
    GetPostGameCarnageReport: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/PostGameCarnageReport/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&activityDefinitions=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetDestinyAggregateActivityStats: function(f, e, g, d, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Stats/AggregateActivityStats/" + encodeURIComponent(f) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&activityDefinitions=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetMembershipIdByDisplayName: function(d, e, f, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/" + encodeURIComponent(d) + "/Stats/GetMembershipIdByDisplayName/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&ignorecase=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetMyGrimoire: function(d, e, f, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(e) + "&flavour=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetGrimoireByMembership: function(d, e, f, g, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&definitions=" + encodeURIComponent(f) + "&flavour=" + encodeURIComponent(g);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetGrimoireDefinition: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Destiny/Vanguard/Grimoire/Definition/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.destinyService.destinyData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.destinyService.destinyData.setCacheItem(a);
        f(a)
      }, g)
    }
  }
})(jQuery);