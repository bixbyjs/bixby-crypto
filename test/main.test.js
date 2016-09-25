/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../xom/main');


describe('crypto', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto');
  });
  
  describe('API', function() {
    var api = factory();
    
    it('should conform to interface', function() {
      expect(api).to.be.an('object');
      expect(api.generateKey).to.be.a('function');
    });
  });
  
});
