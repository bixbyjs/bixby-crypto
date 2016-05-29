exports = module.exports = function() {
  // Load modules.
  var RSG = require('../lib/rsg');
  
  
  return new RSG();
}

exports['@implements'] = 'http://i.bixbyjs.org/crypto/RSG';
exports['@singleton'] = true;
