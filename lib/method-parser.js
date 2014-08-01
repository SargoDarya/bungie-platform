var ignoredMethods =
      ['data', 'contentData', 'dataStore', 'getCacheItem',
       'setCacheItem', 'getCacheSet', 'setCacheSet', 'tokensData', 'destinyData',
       'coreData', 'bugsData', 'adminData', 'gameData', 'ignoreData', 'activityData',
       'forumData', 'externalSocialData', 'notificationData', 'messageData', 'userData',
       'jsonpData', 'groupData'];

function getSignature(method) {
  return method.toString().split('{')[0].replace(/function /gi, '');
}

function recurse(obj) {
  var o = [];

  for (var k in obj) {
    var oType = typeof obj[k]
    if (ignoredMethods.indexOf(k) === -1) {
      if (oType === 'object') {
        o.push({
          name: k,
          childs: recurse(obj[k])
        });
      } else if (oType === 'function'){
        o.push({
          name: k,
          signature: getSignature(obj[k]),
          childs: []
        });
      }
    }
  }

  return o;
}

function getAllMethods(obj, prefix) {
  var o = [];
  prefix = prefix || '';

  function recurse(obj, prefix) {
    for (var k in obj) {
      var oType = typeof obj[k];

      if (ignoredMethods.indexOf(k) === -1) {
        if (oType === 'object') {
          recurse(obj[k], prefix + k + '.');
        } else if (oType === 'function'){
          o.push(prefix + k);
        }
      }
    }
  }

  recurse(obj, prefix);
  return o;
}

module.exports = {
  recurse: recurse,
  getAllMethods: getAllMethods
};