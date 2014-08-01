(function() {
  bungieNetPlatform.surveyService = {
    dataStore: [],
    surveyData: {
      getCacheItem: function(a) {
        return bungieNetPlatform.surveyService.dataStore[a + ""]
      },
      setCacheItem: function(a) {
        bungieNetPlatform.surveyService.dataStore[a.id + ""] = a
      },
      getCacheSet: function(a) {
        return bungieNetPlatform.surveyService.dataStore["Set_" + a]
      },
      setCacheSet: function(a) {
        bungieNetPlatform.surveyService.dataStore["Set_" + a.id] = a
      }
    },
    GetSurvey: function(d, e, b) {
      var a = bungieNetPlatform.platformSettings.platformUrl + "/Survey/GetSurvey/",
          c = "?lc=" + bungieNetPlatform.platformSettings.currentLocale + "&fmt=true&lcin=" + bungieNetPlatform.platformSettings.locInherit;
      if (typeof b !== "undefined") c += b;
      a = a + c;
      typeof _gaq !== "undefined" && _gaq.push(["_trackPageview", a]);
      return bungieNetPlatform.serviceLibrary.get(a, function(a) {
        d(a)
      }, e)
    }
  }
})(jQuery);