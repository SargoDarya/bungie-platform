(function() {
  bungieNetPlatform.messageService = {
    dataStore: [],
    messageData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.messageService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.messageService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.messageService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.messageService.dataStore["Set_" + a.id] = a
      }
    },
    GetConversationByIdV2: function(d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationByIdV2/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetConversationWithMemberIdV2: function(d, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationWithMemberV2/" + encodeURIComponent(d) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    GetConversationThreadV3: function(d, h, e, f, g, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationThreadV3/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(e);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        f(a)
      }, g)
    },
    SaveMessageV3: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/SaveMessageV3/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    CreateConversation: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/CreateConversation/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetConversationsV4: function(g, d, e, f, c) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV4/" + encodeURIComponent(g) + "/",
          b = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      b += "&format=" + encodeURIComponent(d);
      if (typeof c !== "undefined") b += c;
      a = a + b;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetUnreadConversationCountV3: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetUnreadConversationCountV3/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    LeaveConversation: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/LeaveConversation/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    ReviewInvitations: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewListDirect/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, g, function(a) {
        e(a)
      }, f)
    },
    ReviewAllInvitations: function(d, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewAllDirect/" + encodeURIComponent(d) + "/" + encodeURIComponent(e) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    ReviewInvitationDirect: function(e, d, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/ReviewDirect/" + encodeURIComponent(e) + "/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        f(a)
      }, g)
    },
    ReviewInvitation: function(e, f, d, g, h, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/" + encodeURIComponent(e) + "/" + encodeURIComponent(f) + "/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, null, function(a) {
        g(a)
      }, h)
    },
    GetAllianceJoinInvitations: function(d, g, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/AllianceInvitations/RequestsToJoinYourGroup/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetAllianceInvitedToJoinInvitations: function(d, g, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/AllianceInvitations/InvitationsToJoinAnotherGroup/" + encodeURIComponent(d) + "/" + encodeURIComponent(g) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetInvitationDetails: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/Invitations/" + encodeURIComponent(d) + "/Details/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetUnreadConversationCountV2: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetUnreadPrivateConversationCount/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    },
    GetConversationById: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationById/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetConversationWithMemberId: function(d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationWithMember/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    SaveMessageV2: function(f, d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/SaveMessageV2/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.post(a, f, function(a) {
        d(a)
      }, e)
    },
    GetConversationsV2: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV2/" + encodeURIComponent(g) + "/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetConversationsV3: function(g, d, e, f, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationsV3/" + encodeURIComponent(g) + "/" + encodeURIComponent(d) + "/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        e(a)
      }, f)
    },
    GetConversationThreadV2: function(d, h, e, f, g, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Message/GetConversationThreadV2/" + encodeURIComponent(d) + "/" + encodeURIComponent(h) + "/" + encodeURIComponent(e) + "/",
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