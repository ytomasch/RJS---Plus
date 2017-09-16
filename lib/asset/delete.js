// Includes
var http = require('../util/http.js').func;
var getProductInfo = require('./getProductInfo.js').func;
var getGeneralToken = require('../util/getGeneralToken.js').func;

// Args
exports.required = [['asset', 'product']];
exports.optional = ['price', 'jar'];
function delete(jar, token, assetID){
  var httpOpt = {
    url: '//www.roblox.com/asset/delete-from-inventory',
    options: {
      method: 'POST',
      jar: jar,
      headers: {
        'X-CSRF-TOKEN': token
      }
      form: {
        'assetId': assetID
      }
    }
  };
  return http(httpOpt)
  .then(function (body) {
    var json = JSON.parse(body);
    var err = json.errorMsg;
    if (!err) {
      console.log("[Roblox-JS-Plus]: Item Delete Complete.");
    } else {
      throw new Error(err);
    }
  });
}
