exports = module.exports = function(container, asymKeyFinder, symKeyFinder, keyStore) {
  var Keyring = require('../lib/keyring');
  
  
  var keyring = new Keyring(keyStore, symKeyFinder, asymKeyFinder);
  return keyring;
};

exports['@implements'] = [ 'http://i.bixbyjs.org/crypto/Keyring' ];
exports['@singleton'] = true;
exports['@require'] = [
  '!container',
  './asym/keyfinder',
  './sym/keyfinder',
  'http://i.bixbyjs.org/crypto/KeyStore'
];
