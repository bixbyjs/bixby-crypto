exports = module.exports = function() {
  
  
  return function findSecretViaObjectProperty(q, cb) {
    console.log('FIND SECRET!');
    console.log(q);
    
    if (q.usage == 'sign') {
      if (!q.recipients) {
        return cb(null, [{ privateKey: 'secret-foo-bar-asdfadfasfasdfaeafdasfsf', algorithm: 'hmac-sha256'}]);
      }
    
      // TODO: Check that we have only a single recipient.  multiple
      //  cannot use shared secrets
      var recipient = q.recipients[0];
      if (recipient.secret) {
        return cb(null, [ { secret: recipient.secret, algorithm: 'hmac-sha256' } ]);
      }
    
    } else if (q.usage == 'encrypt') {
      if (q.length === 256) {
        return cb(null, [{ secret: '12abcdef7890abcdef7890abcdef7890', algorithm: 'hmac-sha256'}]);
      }
      if (q.length === 16) {
        return cb(null, [{ secret: 'abcdef7890abcdef', algorithm: 'hmac-sha256'}]);
      }
      
      if (!q.recipients) {
        return cb(null, [{ secret: 'secret-foo-bar-asdfadfasfasdfaeafdasfsf', algorithm: 'hmac-sha256'}]);
      }
    
      var recipient = q.recipients[0];
      if (recipient.secret) {
        return cb(null, [ { secret: recipient.secret, algorithm: 'hmac-sha256' } ]);
      }
    
    } else if (q.usage == 'verify') {
      console.log('VERIFY');
      console.log(global.IS_INTERNAL_API)
      console.log(q);
      
      if (global.IS_INTERNAL_API) {
        return cb(null, [ { secret: 'secret-foo-bar-asdfadfasfasdfaeafdasfsf', algorithm: 'hmac-sha256' } ])
        //return cb(null, [ { secret: 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd' } ]);
      }
      
      if (q.sender == 'http://localhost') {
        
        
        return cb(null, [ { secret: 'some-secret-shared-with-oauth-authorization-server', algorithm: 'hmac-sha256' } ]);
        //return cb(null, [ { secret: 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd' } ]);
      }
      
      return cb(null, [ { secret: 'some-secret-shared-with-oauth-authorization-server', algorithm: 'hmac-sha256' } ]);
    } else if (q.usage == 'decrypt') {
      if (global.IS_INTERNAL_API) {
        return cb(null, [ { secret: 'secret-foo-bar-asdfadfasfasdfaeafdasfsf', algorithm: 'hmac-sha256' } ])
        //return cb(null, [ { secret: 'some-shared-with-rs-s3cr1t-asdfasdfaieraadsfiasdfasd' } ]);
      }
      
      if (q.length === 256) {
        return cb(null, [{ secret: '12abcdef7890abcdef7890abcdef7890', algorithm: 'hmac-sha256'}]);
      }
      if (q.length === 16) {
        return cb(null, [{ secret: 'abcdef7890abcdef', algorithm: 'hmac-sha256'}]);
      }
      
      return cb(null, [ { secret: 'some-secret-shared-with-oauth-authorization-server', algorithm: 'hmac-sha256' } ]);
    }
  
  
    return cb(null);
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/crypto/sym/findKeysFunc';
exports['@service'] = 'Object.property';
