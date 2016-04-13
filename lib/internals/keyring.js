function PluggableKeyring(client, options) {
}

PluggableKeyring.prototype.use = function(fn) {
  this._mech = fn;
}

PluggableKeyring.prototype.find = function(options, cb) {
  console.log('FIND KEY');
  console.log(options);
  
  this._mech(options, cb);
}


module.exports = PluggableKeyring;
