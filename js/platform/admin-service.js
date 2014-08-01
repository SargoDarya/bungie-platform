(function() {
  bungieNetPlatform.adminService = {
    dataStore: [],
    adminData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.adminService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.adminService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.adminService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.adminService.dataStore["Set_" + a.id] = a
      }
    },
    GetAssignedReports: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Assigned/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    ResolveReport: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Assigned/Resolve/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    OverturnReport: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Reports/Overturn/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetDisciplinedReportsForMember: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/" + encodeURIComponent(d) + "/Reports/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    GetResolvedReports: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Reports/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GloballyIgnoreItem: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Ignores/GloballyIgnore/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    OverrideBanOnUser: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/" + encodeURIComponent(d) + "/SetBan/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    OverrideGlobalIgnore: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Ignores/OverrideGlobalIgnore/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    AdminUserSearch: function(f, d, e, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Admin/Member/Search/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&q=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    }
  }
})(jQuery);