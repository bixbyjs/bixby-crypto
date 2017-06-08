exports = module.exports = function(container, logger) {
  // Load modules.
  var Client = require('nks').Client;
  
  
  var client = new Client();
  
  var findFnDecls = container.components('http://i.bixbyjs.org/crypto/asym/findKeysFunc');
  return Promise.all(findFnDecls.map(function(spec) { return container.create(spec.id); } ))
    .then(function(fns) {
      fns.forEach(function(fn, i) {
        var srvs, j, len;
        srvs = findFnDecls[i].a['@service'];
        if (!Array.isArray(srvs)) {
          srvs = [ srvs ];
        }
      
        for (j = 0, len = srvs.length; j < len; ++j) {
          client.use(srvs[j], fn);
          logger.info('Loaded public key finder: ' + srvs[j]);
        }
      });
    })
    .then(function() {
      return client;
    });
};

exports['@singleton'] = true;
exports['@require'] = [ '!container', 'http://i.bixbyjs.org/Logger' ];
