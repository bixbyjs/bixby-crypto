function SymmetricKeyring() {
}

// TODO: Determine the best interface for this.
SymmetricKeyring.prototype.find = function(options, cb) {
  var peer = options.peer;
  return cb(null, peer.secret, { algorithm: 'hmac-sha256' });
};


module.exports = SymmetricKeyring;
