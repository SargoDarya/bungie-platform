(function(a) {
  bungieNetPlatform.contentService = {
    dataStore: [],
    contentData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.contentService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.contentService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.contentService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.contentService.dataStore["Set_" + a.id] = a
      }
    },
    GetContentType: function(h, f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentType/" + encodeURIComponent(h) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetContentById: function(j, g, i, f, h, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentById/" + encodeURIComponent(j) + "/" + encodeURIComponent(g) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&head=" + encodeURIComponent(i);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetContentByTagAndType: function(k, j, g, i, f, h, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentByTagAndType/" + encodeURIComponent(k) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(g) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&head=" + encodeURIComponent(i);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    },
    SearchContentEx: function(g, e, h, d, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Content/SearchEx/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&head=" + encodeURIComponent(h);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    SearchContentWithText: function(i, l, j, m, g, h, f, k, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Search/" + encodeURIComponent(i) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&head=" + encodeURIComponent(l) + "&ctype=" + encodeURIComponent(j) + "&tag=" + encodeURIComponent(m) + "&currentpage=" + encodeURIComponent(g) + "&searchtext=" + encodeURIComponent(h);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, k)
    },
    SearchContentByTagAndType: function(m, l, i, k, h, g, f, j, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/SearchContentByTagAndType/" + encodeURIComponent(m) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(i) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&head=" + encodeURIComponent(k) + "&currentpage=" + encodeURIComponent(h) + "&itemsperpage=" + encodeURIComponent(g);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, j)
    },
    GetHomepageContent: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Homepage/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetJobs: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Jobs/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetNews: function(i, j, g, h, f, k, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/News/" + encodeURIComponent(i) + "/" + encodeURIComponent(j) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&itemsperpage=" + encodeURIComponent(g) + "&currentpage=" + encodeURIComponent(h);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, k)
    },
    GetDestinyContent: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Destiny/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetDestinyContentV2: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Content/Site/Destiny/V2/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.contentService.contentData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.contentService.contentData.setCacheItem(a);
        f(a)
      }, h)
    }
  }
})(jQuery);