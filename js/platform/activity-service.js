(function() {
  bungieNetPlatform.activityService = {
    dataStore: [],
    activityData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.activityService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.activityService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.activityService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.activityService.dataStore["Set_" + a.id] = a
      }
    },
    GetAggregatedActivitiesForCurrentUser: function(d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Aggregation/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&typefilter=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetEntitiesFollowedByCurrentUser: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Following/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetGroupsFollowedByCurrentUser: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Following/Groups/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetGroupsFollowedByUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Following/Groups/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetGroupsFollowedPagedByUser: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(d) + "/Following/Groups/Paged/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetEntitiesFollowedByUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Following/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetFollowersOfUser: function(h, d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Followers/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    FollowUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Follow/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    UnfollowUser: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(f) + "/Unfollow/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    GetLikeAndShareActivityForUser: function(i, d, e, f, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(i) + "/Activities/LikesAndShares/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e) + "&format=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetLikeAndShareActivityForUserV2: function(h, d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Activities/LikesAndSharesV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&currentpage=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetForumActivityForUser: function(i, d, e, f, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(i) + "/Activities/Forums/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e) + "&format=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetForumActivityForUserV2: function(h, d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/User/" + encodeURIComponent(h) + "/Activities/ForumsV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&currentpage=" + encodeURIComponent(d) + "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetFollowersOfGroup: function(h, d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(h) + "/Followers/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    FollowGroup: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(f) + "/Follow/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    UnfollowGroup: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(f) + "/Unfollow/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    GetGroupActivities: function(g, d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Group/" + encodeURIComponent(g) + "/Activities/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetFollowersOfTag: function(h, d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Followers/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&tag=" + encodeURIComponent(h) + "&itemsperpage=" + encodeURIComponent(d) + "&currentpage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    FollowTag: function(f, d, e, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Follow/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&tag=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    UnfollowTag: function(f, d, e, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Tag/Unfollow/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&tag=" + encodeURIComponent(f);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        d(a)
      }, e)
    },
    GetFriends: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetFriendsAllNoPresence: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/AllNoPresence/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetFriendsPaged: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Activity/Friends/Paged/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    }
  }
})(jQuery);