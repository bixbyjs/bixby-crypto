exports = module.exports = function(keyGenerator, rsg) {
  var api = {};
  
  api.generateKey = function(options, cb) {
    keyGenerator.generate(options, cb);
  }
  
  api.randomString = function(size) {
    return rsg.generate(size);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/crypto/KeyGenerator',
  'http://i.bixbyjs.org/crypto/RSG'
];
