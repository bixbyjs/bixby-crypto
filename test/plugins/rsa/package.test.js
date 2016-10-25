/* global describe, it */

var expect = require('chai').expect;
var pkg = require('../../../plugins/rsa');


describe('bixby-crypto/plugins/rsa', function() {
  
  it('should export manifest', function() {
    expect(pkg).to.be.an('object');
    expect(pkg['keygen']).to.be.a('function');
  });
  
  describe('keygen', function() {
    var keygen = pkg['keygen'];
    
    it('should be annotated', function() {
      expect(keygen['@implements']).to.equal('http://i.bixbyjs.org/crypto/keygenFunc');
      expect(keygen['@singleton']).to.be.undefined;
      expect(keygen['@algorithm']).to.equal('RSASSA-PKCS1-v1_5');
    });
  });
  
});
