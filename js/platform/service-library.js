(function(a) {
  function c(b, f, e, d, g) {
    if (b.ErrorCode == 1) {
      f(b.Response);
      d.resolve(b.Response)
    } else {
      var c = {
        errorCode: b.ErrorCode,
        errorStatus: b.ErrorStatus,
        errorMessage: b.Message,
        messageData: b.MessageData,
        debug: b.Debug
      };
      e(c, b.Response);
      d.reject(c)
    }
    currentRequest = currentRequests.splice(a.inArray(g, currentRequests), 1)
  }
  function b(e, f, g, c, d) {
    var b = {
      errorCode: 2,
      errorStatus: "TransportException",
      errorMessage: Localizer.Messages.TransportException,
      messageData: []
    };
    c(b, null);
    d.reject(b);
    currentRequest = currentRequests.splice(a.inArray(e, currentRequests), 1)
  }
  bungieNetPlatform.getCSRFHeader = function() {
    var a = Cookies.GetMulti(ServerVars.WebAuthCookieName, "tk");
    return a ? {
      "x-csrf": a
    } : {}
  };
  bungieNetPlatform.getHeaders = function() {
    var a = bungieNetPlatform.getCSRFHeader();
    a["X-API-Key"] = "10E792629C2A47E19356B8A79EEFA640";
    return a
  };
  bungieNetPlatform.serviceLibrary = {
    post: function(i, g, f, e) {
      var d = a.Deferred(),
          h = a.ajax({
          type: "POST",
          url: i,
          data: JSON.stringify(g),
          dataType: "json",
          contentType: "application/json; charset=utf-8;",
          processData: false,
          headers: bungieNetPlatform.getHeaders(),
          success: function(b, g, a) {
            c(b, f, e, d, a)
          },
          error: function(f, a, c) {
            b(f, a, c, e, d)
          }
        });
      currentRequests.push(h);
      return d.promise()
    },
    "get": function(h, f, e) {
      var d = a.Deferred(),
          g = a.ajax({
          type: "GET",
          url: h,
          dataType: "json",
          headers: bungieNetPlatform.getHeaders(),
          success: function(b, g, a) {
            c(b, f, e, d, a)
          },
          error: function(f, a, c) {
            b(f, a, c, e, d)
          }
        });
      currentRequests.push(g);
      return d.promise()
    },
    postForm: function(j, h, e, g, f) {
      var d = a.Deferred(),
          i = a.ajax({
          type: "POST",
          url: j,
          data: h,
          headers: bungieNetPlatform.getHeaders(),
          cache: false,
          dataType: e ? "json" : null,
          contentType: false,
          processData: false,
          success: function(b, i, h) {
            if (e) c(b, g, f, d, h);
            else {
              var a = JSON.parse(b);
              g(a);
              d.resolve(a)
            }
          },
          error: function(e, a, c) {
            b(e, a, c, f, d)
          }
        });
      currentRequests.push(i);
      return d.promise()
    }
  }
})(jQuery);