exports = module.exports = function(keyGenerator) {
  
  return function createMemoryKeyStore(options) {
    var MemoryKeyStore = require('../../lib/memorykeystore');
    
    return new Promise(function(resolve, reject){
      var keyStore = new MemoryKeyStore();
      
      keyGenerator.generate({ type: 'RSA', length: 1024 }, function(err, key) {
        if (err) { return reject(err); }
        
        //key.usages = [ 'sign', 'verify' ];
        key.usages = [ 'sign' ];
        // TODO: Algorith usage
        // rsa-sha256
        //key.algorithm = 'RSA-SHA256';
      
        keyStore.add(key, function(err) {
          if (err) { return reject(err); }
          return resolve(keyStore);
        });
      });
    });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/createKeyStoreFunc';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/crypto/KeyGenerator'
];
