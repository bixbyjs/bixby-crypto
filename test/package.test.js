/* global describe, it */

var expect = require('chai').expect;
var pkg = require('..');


describe('bixby-crypto', function() {
  
  it('should export manifest', function() {
    expect(pkg).to.be.an('object');
    expect(pkg['']).to.be.a('function');
    expect(pkg['keygenerator']).to.be.a('function');
    expect(pkg['rsg']).to.be.a('function');
  });
  
  describe('crypto', function() {
    var main = pkg[''];
    
    it('should be annotated', function() {
      expect(main['@implements']).to.equal('http://i.bixbyjs.org/crypto');
      expect(main['@singleton']).to.equal(true);
    });
  });
  
  describe('crypto/keygenerator', function() {
    var keyGenerator = pkg['keygenerator'];
    
    it('should be annotated', function() {
      expect(keyGenerator['@implements']).to.equal('http://i.bixbyjs.org/crypto/KeyGenerator');
      expect(keyGenerator['@singleton']).to.equal(true);
    });
  });
  
  describe('crypto/rsg', function() {
    var rsg = pkg['rsg'];
    
    it('should be annotated', function() {
      expect(rsg['@implements']).to.equal('http://i.bixbyjs.org/crypto/RSG');
      expect(rsg['@singleton']).to.equal(true);
    });
  });
  
});
