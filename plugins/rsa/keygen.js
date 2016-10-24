/**
 * RSA key generator.
 *
 * Generates an RSA public/private key pair.
 *
 * Calling this function is functionally equivalent to the following commands:
 *
 *   $ openssl genrsa -out privatekey.pem 2048
 *   $ openssl rsa -in privatekey.pem -pubout > publickey.pem
 *
 * @return {function}
 */
exports = module.exports = function() {
  // Load modules.
  var akeypair = require('akeypair');
  
  return function(options, cb) {
    akeypair(options, function(err, pair) {
      if (err) { return cb(err); }
      return cb(null, { publicKey: pair.public, privateKey: pair.private });
    });
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/keygenFunc';
exports['@algorithm'] = [ 'RSASSA-PKCS1-v1_5' ];