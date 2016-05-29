exports = module.exports = function(container, logger) {
  // Load modules.
  var KeyGenerator = require('../lib/keygenerator');
  
  
  logger.info('Creating key generator <' + this.id + '>');
  var generator = new KeyGenerator();
  
  var specs = container.specs()
    , spec, pi, types, type
    , i, len, j, jlen;
  for (i = 0, len = specs.length; i < len; ++i) {
    spec = specs[i];
  
    if (spec.implements.indexOf('http://i.bixbyjs.org/crypto/keygenFunc') !== -1) {
      pi = container.create(spec.id);
    
      types = spec.a['@type'];
      if (!Array.isArray(types)) {
        types = [ types ];
      }
      for (j = 0, jlen = types.length; j < jlen; ++j) {
        type = types[j];
        generator.use(type, pi);
        logger.info('Added support for generating keys of type: ' + type);
      }
    }
  }
  
  return generator;
}

exports['@implements'] = 'http://i.bixbyjs.org/crypto/KeyGenerator';
exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
