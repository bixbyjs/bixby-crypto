function KeyGenerator() {
  this._types = {};
}

KeyGenerator.prototype.use = function(type, fn) {
  this._types[type] = fn;
};

KeyGenerator.prototype.generate = function(options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};

  var type = options.type || 'RSA';
  var fn = this._types[type];
  if (!fn) { return cb(new Error('Unable to generate key pair of type: ' + type)); }
  
  try {
    fn(options, cb);
  } catch (ex) {
    cb(ex);
  }
};




exports = module.exports = function(container, logger) {
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
