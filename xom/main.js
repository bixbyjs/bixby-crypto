exports = module.exports = function() {
  var api = {};
  
  api.generateKey = function() {
    console.log('GENERATE KEY...');
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto';
exports['@singleton'] = true;
exports['@require'] = [];
