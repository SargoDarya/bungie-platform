(function(a) {
  bungieNetPlatform.forumService = {
    dataStore: [],
    forumData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.forumService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.forumService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.forumService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.forumService.dataStore["Set_" + a.id] = a
      }
    },
    CreatePost: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/CreatePost/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    CreateContentComment: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/CreateContentComment/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    EditPost: function(g, e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/EditPost/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    DeletePost: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/DeletePost/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, f)
    },
    RatePost: function(e, f, d, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/RatePost/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, g)
    },
    UndoRating: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/UndoRating/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, f)
    },
    ModeratePost: function(g, e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Post/" + encodeURIComponent(e) + "/Moderate/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    ModerateTag: function(g, e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Tags/" + encodeURIComponent(e) + "/Moderate/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    ModerateGroupPost: function(g, e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Post/" + encodeURIComponent(e) + "/GroupModerate/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        d(a)
      }, f)
    },
    GetTopicsPagedForAlliance: function(k, g, j, l, f, d, e, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicsPagedForAlliance/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&tagstring=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetTopicsPaged: function(k, g, j, l, f, d, e, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicsPaged/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(j) + "/" + encodeURIComponent(l) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&tagstring=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetPopularTopicsAnonymously: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPopularTopicsAnonymously/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetPostsThreadedPaged: function(f, m, i, h, e, d, j, g, k, l, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostsThreadedPaged/" + encodeURIComponent(f) + "/" + encodeURIComponent(m) + "/" + encodeURIComponent(i) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(j) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&showbanned=" + encodeURIComponent(g);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        k(a)
      }, l)
    },
    GetPostsThreadedPagedFromChild: function(e, k, g, f, d, h, i, j, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostsThreadedPagedFromChild/" + encodeURIComponent(e) + "/" + encodeURIComponent(k) + "/" + encodeURIComponent(g) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        i(a)
      }, j)
    },
    GetPostAndParent: function(g, h, f, i, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPostAndParent/" + encodeURIComponent(g) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&showbanned=" + encodeURIComponent(h);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, i)
    },
    GetPopularTags: function(h, g, f, i, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetPopularTags/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&quantity=" + encodeURIComponent(h) + "&tagsSinceDate=" + encodeURIComponent(g);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, i)
    },
    GetForumTagCountEstimate: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetForumTagCountEstimate/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetTopicForContent: function(g, f, h, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetTopicForContent/" + encodeURIComponent(g) + "/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, h)
    },
    GetForumTagSuggestions: function(g, f, h, e) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Forum/GetForumTagSuggestions/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      c += "&partialtag=" + encodeURIComponent(g);
      if (typeof e !== "undefined") c += e;
      b = b + c;
      var d = bungieNetPlatform.forumService.forumData.getCacheItem(b);
      if (d) return a.Deferred(function(a) {
        f(d);
        a.resolve(d)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.forumService.forumData.setCacheItem(a);
        f(a)
      }, h)
    },
    MarkReplyAsAnswer: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/MarkReplyAsAnswer/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    PollVote: function(f, d, e, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Poll/Vote/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, g)
    },
    GetPoll: function(e, d, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Forum/Poll/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, f)
    }
  }
})(jQuery);