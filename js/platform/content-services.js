(function(a) {
  bungieNetPlatform.contentServices = {
    dataStore: [],
    contentData: {
      getContent: function(a, b) {
        return bungieNetPlatform.contentServices.dataStore[a + "_" + b]
      },
      setContent: function(a) {
        bungieNetPlatform.contentServices.dataStore[a.contentId + "_" + a.locale] = a
      }
    },
    search: function(d) {
      var c = a.extend({
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, d),
        b = a.extend({
          contentTypes: "",
          tag: "",
          notTag: "",
          locale: bungieNetPlatform.platformSettings.currentLocale,
          itemsPerPage: 100,
          currentPage: 1,
          sortBy: Globals.ContentSortBy.CreationDate,
          creationDate: Globals.ContentDateRange.All,
          modifiedDate: Globals.ContentDateRange.All
        }, d.query),
        e = bungieNetPlatform.platformSettings.platformUrl + "/Content/Search/" + b.locale + "/?types=" + b.contentTypes + "&tag=" + b.tag + "&sortby=" + b.sortBy + "&itemsperpage=" + b.itemsPerPage + "&currentpage=" + b.currentPage;
      if (c.headOnly) e += "&head=true";
      return bungieNetPlatform.serviceLibrary.get(e, function(b) {
        a.each(b, function() {
          bungieNetPlatform.contentServices.contentData.setContent(this)
        });
        c.callback(b)
      }, c.errorCallback)
    },
    getForId: function(e) {
      var b = a.extend({
          contentId: 0,
          locale: bungieNetPlatform.platformSettings.currentLocale,
          callback: function() {},
          errorCallback: function() {},
          headOnly: false
        }, e),
        c = null;
      c = bungieNetPlatform.contentServices.contentData.getContent(b.contentId, b.locale);
      if (c) return a.Deferred(function(a) {
        b.callback(c);
        a.resolve(c)
      }).promise();
      else {
        var d = bungieNetPlatform.platformSettings.platformUrl + "/Content/GetContentById/" + b.contentId + "/" + b.locale + "/";
        if (b.headOnly) d += "?head=true";
        return bungieNetPlatform.serviceLibrary.get(d, function(a) {
          bungieNetPlatform.contentServices.contentData.setContent(a);
          b.callback(a)
        }, b.errorCallback)
      }
    }
  }
})(jQuery);