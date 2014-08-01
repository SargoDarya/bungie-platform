(function() {
  bungieNetPlatform.bugsService = {
    dataStore: [],
    bugsData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.bugsService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.bugsService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.bugsService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.bugsService.dataStore["Set_" + a.id] = a
      }
    },
    GetUnreviewedBugs: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Unreviewed/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetBugById: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, f)
    },
    CreateBug: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Create/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    RejectBug: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/Reject/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, f)
    },
    ApproveBug: function(f, e, d, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(f) + "/Approve/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, g)
    },
    AddAttachment: function(g, e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Bug/" + encodeURIComponent(e) + "/Attach/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    StatsFeedback: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Bugs/Stats/Report/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    }
  }
})(jQuery);