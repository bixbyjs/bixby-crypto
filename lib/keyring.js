exports = module.exports = function(container) {
  return container.create('./keyring/symmetric');
};

exports['@implements'] = [ 'http://i.bixbyjs.org/crypto/Keyring' ];
exports['@singleton'] = true;
exports['@require'] = [ '!container' ];
