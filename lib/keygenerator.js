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


module.exports = KeyGenerator;
