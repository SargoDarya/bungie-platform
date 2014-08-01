(function(a) {
  bungieNetPlatform.contentRepresentationServices = {
    dataStore: [],
    data: {
      "get": function(a, b) {
        return bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + b]
      },
      "set": function(a, c, b) {
        bungieNetPlatform.contentRepresentationServices.dataStore[a + "_" + c] = b
      }
    },
    getRepresentationsForType: function(e) {
      var b = a.extend({
          contentType: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {}
        }, e),
        c = bungieNetPlatform.contentRepresentationServices.data.get(b.contentType, b.locale);
      if (c) return a.Deferred(function(a) {
        b.callback(c);
        a.resolve(c)
      }).promise();
      var d = bungieNetPlatform.platformSettings.platformUrl + "/Content/Representation/GetRepresentationsForType/" + b.contentType + "/" + b.locale + "/";
      return bungieNetPlatform.serviceLibrary.get(d, function(a) {
        bungieNetPlatform.contentRepresentationServices.data.set(b.contentType, b.locale, a);
        b.callback(a)
      }, b.errorCallback)
    }
  }
})(jQuery);