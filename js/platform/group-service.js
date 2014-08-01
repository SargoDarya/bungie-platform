(function(a) {
  bungieNetPlatform.groupService = {
    dataStore: [],
    groupData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.groupService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.groupService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.groupService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.groupService.dataStore["Set_" + a.id] = a
      }
    },
    GetAvailableAvatars: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetAvailableAvatars/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.groupService.groupData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetAvailableThemes: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetAvailableThemes/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.groupService.groupData.setCacheItem(a);
        f(a)
      }, g)
    },
    GetGroupsFollowingGroup: function(d, f, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/FollowedBy/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetGroupsFollowedByGroup: function(d, f, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Following/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    FollowGroupWithGroup: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Follow/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    UnfollowGroupWithGroup: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Unfollow/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    FollowGroupsWithGroup: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/FollowList/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    UnfollowGroupsWithGroup: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/UnfollowList/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    UnfollowAllGroupsWithGroup: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/UnfollowAll/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, f)
    },
    InviteToJoinAlliance: function(h, d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Allies/Invite/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    InviteManyToJoinAlliance: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Allies/InviteMany/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    RequestToJoinAlliance: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Allies/RequestToJoin/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    BreakAlliance: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Relationship/" + encodeURIComponent(e) + "/BreakAlliance/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    BreakAlliances: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/BreakAlliances/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    DisbandAlliance: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/BreakAllAlliances/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, f)
    },
    SetGroupAsAlliance: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/SetAsAlliance/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, f)
    },
    GetAlliedGroups: function(f, e, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Allies/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&currentpage=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetRecommendedGroups: function(f, e, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/Recommended/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&membershiptype=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GroupSearch: function(g, d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Search/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    GetJoinedGroupsForCurrentMember: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetJoinedGroupsForCurrentMemberV2: function(e, f, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/V2/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetPendingGroupsForCurrentMember: function(d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyPendingGroups/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetPendingGroupsForCurrentMemberV2: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyPendingGroups/V2/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetAllGroupsForCurrentMember: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/All/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(e) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetDeletedGroupsForCurrentMember: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyGroups/Deleted/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetJoinedGroupsForMember: function(e, f, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetJoinedGroupsForMemberV2: function(e, f, g, d, h, i, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/Joined/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(g) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        h(a)
      }, i)
    },
    GetPendingGroupsForMember: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/Pending/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetPendingGroupsForMemberV2: function(e, f, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/PendingV2/" + encodeURIComponent(f) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetAllGroupsForMember: function(e, f, d, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/User/" + encodeURIComponent(e) + "/All/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&clanonly=" + encodeURIComponent(f) + "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetGroup: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetGroupByName: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Name/" + encodeURIComponent(e) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetGroupTagSuggestions: function(d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetGroupTagSuggestions/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&partialtag=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    CreateGroup: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Create/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    CreateMinimalGroup: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/Create/Minimal/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    EditGroup: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Edit/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    EditGroupV2: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/EditV2/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    SetPrivacy: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Privacy/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    UndeleteGroup: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Undelete/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, f)
    },
    InviteGroupMember: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Invite/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    InviteClanMember: function(i, f, d, e, g, h, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/InviteToClan/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, i, function(a) {
        g(a)
      }, h)
    },
    GetPendingMemberships: function(f, d, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Members/Pending/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetPendingMembershipsV2: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/PendingV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&currentPage=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    RequestGroupMembership: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/Apply/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    RequestGroupMembershipV2: function(h, e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/ApplyV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    RescindGroupMembership: function(e, d, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/Rescind/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&populatefriends=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    ApproveGroupMembership: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Approve/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    ApproveGroupMembershipV2: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/ApproveV2/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    DenyGroupMembership: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Deny/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    DenyGroupMembershipV2: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/DenyV2/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    ApproveAllPending: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/ApproveAll/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    DenyAllPending: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/DenyAll/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    ApprovePendingForList: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/ApproveList/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    DenyPendingForList: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(d) + "/Members/DenyList/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    GetClanAttributeDefinitions: function(f, g, d) {
      var b = bungieNetPlatform.platformSettings.platformUrl + "/Group/GetClanAttributeDefinitions/",
          e = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof d !== "undefined") e += d;
      b = b + e;
      var c = bungieNetPlatform.groupService.groupData.getCacheItem(b);
      if (c) return a.Deferred(function(a) {
        f(c);
        a.resolve(c)
      }).promise();
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", b]);
      return bungieNetPlatform.serviceLibrary.get(b, function(a) {
        bungieNetPlatform.groupService.groupData.setCacheItem(a);
        f(a)
      }, g)
    },
    EnableClanForGroup: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Enable/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    JoinClanForGroup: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Join/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    LeaveClanForGroup: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Leave/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    DisableClanForGroup: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Clans/Disable/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    RefreshClanSettingsInDestiny: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/MyClans/Refresh/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        e(a)
      }, f)
    },
    GetMembersOfGroup: function(h, d, f, g, e, k, i, j, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(h) + "/Members/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(f) + "&memberType=" + encodeURIComponent(g) + "&platformType=" + encodeURIComponent(e) + "&sort=" + encodeURIComponent(k);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        i(a)
      }, j)
    },
    GetMembersOfGroupV2: function(h, d, f, g, e, k, i, j, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(h) + "/MembersV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(f) + "&memberType=" + encodeURIComponent(g) + "&platformType=" + encodeURIComponent(e) + "&sort=" + encodeURIComponent(k);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        i(a)
      }, j)
    },
    GetMembersOfGroupV3: function(i, d, f, g, e, l, h, j, k, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(i) + "/MembersV3/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(f) + "&memberType=" + encodeURIComponent(g) + "&platformType=" + encodeURIComponent(e) + "&sort=" + encodeURIComponent(l) + "&nameSearch=" + encodeURIComponent(h);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        j(a)
      }, k)
    },
    GetAdminsOfGroup: function(f, d, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Admins/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetAdminsOfGroupV2: function(f, d, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/AdminsV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    EditGroupMembership: function(f, e, d, g, h, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Members/" + encodeURIComponent(e) + "/SetMembershipType/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        g(a)
      }, h)
    },
    KickMember: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Kick/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    BanMember: function(h, e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Ban/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, h, function(a) {
        f(a)
      }, g)
    },
    UnbanMember: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Members/" + encodeURIComponent(d) + "/Unban/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    GetBannedMembersOfGroup: function(f, d, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/Banned/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    GetBannedMembersOfGroupV2: function(f, d, e, g, h, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(f) + "/BannedV2/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&itemsPerPage=" + encodeURIComponent(d) + "&currentPage=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        g(a)
      }, h)
    },
    OverrideFounderAdmin: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Group/" + encodeURIComponent(e) + "/Admin/FounderOverride/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    }
  }
})(jQuery);