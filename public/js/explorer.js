var APIUrl = "http://bungie-platform.herokuapp.com/proxy";

function getAPIEndpoints(callback) {
  $.ajax({
    url: APIUrl+"/endpoints",
    dataType: 'json'
  }).done(function(data) {
    callback(data.endpoints);
  });
}

var reqEl;
function createParamInputs(endpoint) {
  reqEl.html('');
  var params = getParamsForEndpoint(endpoint);

  for (var i = 0; i < params.length; i++) {
    var p = params[i];
    var el = $('<div>'+p+': <input type="text" name="param_'+p+'" /></div>');
    reqEl.append(el);
  }
}

function getParamsForEndpoint(endpoint) {
  endpoint.match(/\:([A-Za-z\-]+)/g);
}

$(function() {
  reqEl = $('.request-elements');

  getAPIEndpoints(function(endpoints) {
    for (var i = 0; i < endpoints.length; i++) {
      $('#options').append($('<option value="'+endpoints[i]+'">'+endpoints[i]+'</option>'));
    }

    $('#options').change(function(evt, data) {
      var endpoint = $(this).val();
      createParamInputs(endpoint);
    });
  });

  $('#send-request').click(function() {
  });
});