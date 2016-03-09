exports = module.exports = function(container, logger) {
  // Load modules.
  var SymmetricKeyring = require('./i/keyring/symmetric');
  
  
  /*
  http://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml
  http://www.iana.org/assignments/jose/jose.xhtml
  https://tools.ietf.org/html/rfc7518#appendix-A.1
  
  https://www.ietf.org/rfc/rfc4051.txt
  https://www.w3.org/2001/04/xmldsig-more
  https://www.w3.org/TR/xmlsec-algorithms/
  
  generally favor XML-SEC algorithm identifiers here.
  
  JOSE Notes (for generalizing signing and encryption related algs)
  require('crypto').getHashes();
  
  JWA
  Cryptographic Algorithms for Digital Signatures and MACs
  3.1.  "alg" (Algorithm) Header Parameter Values for JWS
  HS256 -> HMAC-SHA256  createHmacSigner  crypto.createHmac('sha256')
  HS384 -> HMAC-SHA384
  HS512 -> HMAC-SHA512  
  
  RS256 -> RSA-SHA256  createKeySigner  crypto.createSign('RSA-SHA256'), crypto.createVerify('RSA-SHA256');
  RS384 -> RSA-SHA385
  RS512 -> RSA-SHA512
  
  ES256 -> ECDSA-SHA256  (NOTE: key format is different than RSA (uses same alg in node))
  ES384 -> ECDSA-SHA384
  ES512 -> ECDSA-SHA512
  
  PS256 -> SHA256-RSA-MGF1
  PS384 -> SHA384-RSA-MGF1
  PS512 -> SHA512-RSA-MGF1
  
  
  Key size requirments discussion:
  3.2.  HMAC with SHA-2 Functions
  
  
  Cryptographic Algorithms for Key Management
  TODO: Read all this and understand it
  
  */
  
  
  // NOTES For algorithm selection.
  // - MAY depend on shared secret/key (for key size dependent algs)
  // - MAY depend on message/token format (JWT, Iron, SAML, etc)
  // - note: will determine the type and content of the token
  
  
  var keyring = new SymmetricKeyring();
  return keyring;
}

exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/crypto/Keyring';
exports['@require'] = [
  '!container',
  'http://i.bixbyjs.org/Logger'
];
