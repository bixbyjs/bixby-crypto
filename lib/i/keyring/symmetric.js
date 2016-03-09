function SymmetricKeyring() {
}

// TODO: Determine the best interface for this.
SymmetricKeyring.prototype.find = function(options, cb) {
  var peer = options.peer;
  
  // TODO: Factor this out.
  if (!peer) {
    switch (options.issuer) {
    case 'x-me':
      return cb(null, 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd');
    default:
      return cb(new Error('Unknown service: ' + options.issuer));
    }
  }
  
  
  return cb(null, peer.secret, { algorithm: 'hmac-sha256' });
};


module.exports = SymmetricKeyring;
