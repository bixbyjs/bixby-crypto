function SymmetricKeyring() {
}


SymmetricKeyring.prototype.find = function(query, cb) {
  console.log('SYMMETRIC KEYRING FIND!');
  console.log(query);
  
  // TODO: Check that usage is only recipient-related operations
  //   ie, sign and verify would cause failure
  if (query.usage == 'sign') {
    console.log('SIGNING!');
    
    // TODO: Check that we have only a single recipient.  multiple
    //  cannot use shared secrets
    var recipient = query.recipients[0];
    if (recipient.secret) {
      return cb(null, [ { secret: recipient.secret } ]);
    }
    
  } else if (query.usage == 'verify') {
    if (query.sender.id == 'me-x') {
      return cb(null, [ { secret: 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd' } ]);
    }
  }
  
  
  return cb(null);
};




exports = module.exports = function() {
  var keyring = new SymmetricKeyring();
  return keyring;
};

exports['@singleton'] = true;
