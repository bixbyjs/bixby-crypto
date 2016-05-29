/* global describe, it, expect */

var factory = require('../xom/keyring');
var expect = require('chai').expect;


describe('crypto/keyring', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto/Keyring');
  });
  
  describe.skip('created object', function() {
    var keyring;
    
    before(function() {
      keyring = factory();
    })
    
    it('should conform to interface', function() {
      expect(keyring).to.be.an('object');
      expect(keyring.find).to.be.a('function');
    });
  });
  
});
