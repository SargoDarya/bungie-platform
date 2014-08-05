var APIUrl = "/proxy";

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
    var el = $('<div>'+p+': <input type="text" id="param_'+p+'" name="param_'+p+'" /></div>');
    reqEl.append(el);
  }
}

function getParamsForEndpoint(endpoint) {
  var matches = endpoint.match(/\:([A-Za-z\-]+)/g);
  for (var i = 0; i < matches.length; i++) {
    matches[i] = matches[i].replace(/\:/g, '');
  }
  return matches || [];
}

var currentEndpoint;
$(function() {
  reqEl = $('.request-elements');

  getAPIEndpoints(function(endpoints) {
    for (var i = 0; i < endpoints.length; i++) {
      $('#options').append($('<option value="'+endpoints[i]+'">'+endpoints[i]+'</option>'));
    }

    $('#options').change(function(evt, data) {
      var endpoint = $(this).val();
      currentEndpoint = endpoint;
      createParamInputs(endpoint);
    });
  });

  $('#send-request').click(function() {
    var endpoint = currentEndpoint;
    var p = getParamsForEndpoint(endpoint);

    for (var i = 0; i < p.length; i++) {
      endpoint = endpoint.replace(':'+p[i], $('#param_'+p[i]).val());
    }

    $.ajax({
      url: APIUrl+endpoint,
      dataType: 'json'
    }).done(function(response) {
      $('#response').html(JSON.stringify(response, null, 2).replace(/\n/gi, '<br />').replace(/\s/g, '&nbsp;'));
    });
  });
});