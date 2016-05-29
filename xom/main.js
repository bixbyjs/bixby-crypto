exports = module.exports = function(keyGenerator) {
  var api = {};
  
  api.generateKey = function(options, cb) {
    console.log('GENERATE KEY...');
    
    keyGenerator.generate(options, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/crypto/KeyGenerator'
];
