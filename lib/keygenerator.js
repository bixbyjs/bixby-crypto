function KeyGenerator() {
  this._algs = {};
}

KeyGenerator.prototype.use = function(name, fn) {
  this._algs[name] = fn;
};

KeyGenerator.prototype.generate = function(options, cb) {
  if (typeof options == 'function') {
    cb = options;
    options = undefined;
  }
  options = options || {};

  var alg = options.name || 'RSASSA-PKCS1-v1_5';
  var fn = this._algs[alg];
  if (!fn) { return cb(new Error('Unable to generate key pair with algorithm: ' + alg)); }
  
  try {
    fn(options, cb);
  } catch (ex) {
    cb(ex);
  }
};


module.exports = KeyGenerator;
