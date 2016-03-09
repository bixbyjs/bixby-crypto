exports = module.exports = function() {
  // Load modules.
  var RSG = require('./_i/rsg');
  
  
  return new RSG();
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/crypto/RSG';
