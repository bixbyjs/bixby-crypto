exports = module.exports = function(container) {
  var Factory = require('fluidfactory');
  
  
  var factory = new Factory();
  
  var createFnDecls = container.specs('http://i.bixbyjs.org/crypto/createKeyStoreFunc');
  return Promise.all(createFnDecls.map(function(spec) { return container.create(spec.id); } ))
    .then(function(fns) {
      fns.forEach(function(fn, i) {
        factory.use(fn);
      });
    })
    .then(function() {
      // TODO: Replace this with configuration store
      //var options = global.DIRECTORY_SETTINGS;
      var options = {};
      
      return factory.create(options);
    });
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/KeyStore';
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
