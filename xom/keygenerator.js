exports = module.exports = function(container, logger) {
  // Load modules.
  var KeyGenerator = require('../lib/keygenerator');
  
  
  var generator = new KeyGenerator();
  var keygenDecls = container.specs('http://i.bixbyjs.org/crypto/keygenFunc');
  
  return Promise.all(keygenDecls.map(function(spec) { return container.create(spec.id); } ))
    .then(function(plugins) {
      // Register cryptographic key generation plugins.
      plugins.forEach(function(plugin, i) {
        generator.use(keygenDecls[i].a['@type'] || plugin.name, plugin);
        logger.info('Registered cryptographic key generator: ' + (keygenDecls[i].a['@type'] || plugin.name));
      });
    })
    .then(function() {
      return generator;
    });
}

exports['@implements'] = 'http://i.bixbyjs.org/crypto/KeyGenerator';
exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
