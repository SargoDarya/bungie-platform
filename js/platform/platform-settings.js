var bungieNetPlatform = {},
    currentRequests = [];
(function(a) {
  bungieNetPlatform.platformSettings = {
    initialize: function(b) {
      bungieNetPlatform.platformSettings = a.extend(bungieNetPlatform.platformSettings, a.extend({
        platformUrl: "/Platform",
        renderContentEditLinks: false
      }, b))
    }
  }
})(jQuery);