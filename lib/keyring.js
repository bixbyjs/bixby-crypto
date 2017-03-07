exports = module.exports = function(container) {
  var Client = require('nks').Client;
  
  
  // TODO: Make this a combination of KeyStore and KeyClient.
  
  var keyring = new Client();
  
  
  return keyring;
  
  
  //return container.create('./keyring/symmetric');
};

exports['@implements'] = [ 'http://i.bixbyjs.org/crypto/Keyring' ];
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
