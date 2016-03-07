exports = module.exports = function(container, logger) {
  // Load modules.
  var SymmetricKeyring = require('./i/keyring/symmetric');
  
  
  var keyring = new SymmetricKeyring();
  return keyring;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/crypto/Keyring';
exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/Logger'
];
