exports = module.exports = function() {
  
  
  return function findSecretViaObjectProperty(q, cb) {
    if (q.usage == 'sign') {
      if (!q.recipients) {
        return cb(null, [{ privateKey: 'secret-foo-bar-asdfadfasfasdfaeafdasfsf'}]);
      }
    
      // TODO: Check that we have only a single recipient.  multiple
      //  cannot use shared secrets
      var recipient = q.recipients[0];
      if (recipient.secret) {
        return cb(null, [ { secret: recipient.secret } ]);
      }
    
    } else if (q.usage == 'verify') {
      if (q.sender.id == 'me-x') {
        return cb(null, [ { secret: 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd' } ]);
      }
    }
  
  
    return cb(null);
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/sym/findKeysFunc';
exports['@service'] = 'Object.property';
