exports = module.exports = function() {
  // Load modules.
  var KeyGenerator = require('../lib/keygenerator');
  
  
  var kg = new KeyGenerator();
  return kg;
}

exports['@implements'] = 'http://i.bixbyjs.org/crypto/KeyGenerator';
exports['@singleton'] = true;
