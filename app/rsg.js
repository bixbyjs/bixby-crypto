var cryptiles = require('cryptiles');

function RSG() {
}

RSG.prototype.generate = function(size) {
  var random = cryptiles.randomString(size);
  if (random instanceof Error) {
    throw random;
  }
  return random;
}




exports = module.exports = function() {
  return new RSG();
}

exports['@implements'] = 'http://i.bixbyjs.org/crypto/RSG';
exports['@singleton'] = true;
