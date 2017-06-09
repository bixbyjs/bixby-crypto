/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../app/main');


describe('crypto', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto');
    expect(factory['@singleton']).to.equal(true);
  });
  
  describe('API', function() {
    var api = factory();
    
    it('should conform to interface', function() {
      expect(api).to.be.an('object');
      expect(api.generateKey).to.be.a('function');
    });
  });
  
});
