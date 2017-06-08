var clone = require('clone');


function Keyring(keyStore, sharedKeyFinder, publicKeyFinder) {
  this._keyStore = keyStore;
  this._sharedKeyFinder = sharedKeyFinder;
  this._publicKeyFinder = publicKeyFinder;
}

/*
Keyring#find
{ recipients: [ 'http://localhost/oauth/' ],
  usage: 'sign',
  algorithms: [ 'hmac-sha256', 'rsa-sha256' ] }
*/

Keyring.prototype.find = function(q, cb) {
  console.log('Keyring#find');
  console.log(q);
  //return;
  
  var self = this;
  
  this._keyStore.find(q, function(err, privateKeys) {
    console.log('GOT PRIVATE KEYS');
    console.log(err);
    console.log(privateKeys);
    
    self._sharedKeyFinder.find(q, function(err, sharedKeys) {
      console.log('GOT SHARED KEYS');
      console.log(err);
      console.log(sharedKeys);
      
      if (err) { return cb(err); }
      return cb(null, sharedKeys);
    });
  });
};


module.exports = Keyring;
