var clone = require('clone');


function MemoryKeyStore() {
  this._keys = [];
}

MemoryKeyStore.prototype.all = function(cb) {
  var keys = clone(this._keys);
  process.nextTick(function() {
    return cb(null, keys);
  });
}

MemoryKeyStore.prototype.find = function(q, cb) {
  this.all(function(err, keys) {
    if (err) { return cb(err); }
    // TODO: Filter keys by query
    
    var skeys = []
      , key, i, len;
    for (i = 0, len = keys.length; i < len; ++i) {
      key = keys[i];
      if (key.usages.indexOf(q.usage) !== -1) {
        // TODO: This needs to distinguage between sender and recipient?
        skeys.push(key);
      }
      // TODO: select by algorithm
    }
    
    return cb(null, skeys);
  });
};

MemoryKeyStore.prototype.add = function(key, cb) {
  key.id = this._keys.length.toString();
  this._keys.push(key);
  return cb();
}


module.exports = MemoryKeyStore;
