function SymmetricKeyring() {
}


SymmetricKeyring.prototype.find = function(query, cb) {
  console.log('SYMMETRIC KEYRING FIND!');
  console.log(query);
  
  // TODO: Check that usage is only recipient-related operations
  //   ie, sign and verify would cause failure
  if (query.usage.indexOf('sign') !== -1) {
    console.log('SIGNING!');
    
    // TODO: Check that we have only a single recipient.  multiple
    //  cannot use shared secrets
    var recipient = query.recipients[0];
    if (recipient.secret) {
      return cb(null, [ { secret: recipient.secret } ]);
    }
    
  }
  
  
  return cb(null);
};




exports = module.exports = function() {
  var keyring = new SymmetricKeyring();
  return keyring;
};

exports['@singleton'] = true;
