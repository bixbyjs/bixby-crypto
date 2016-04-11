/* global describe, it, expect */

var factory = require('../lib/rsg');
var expect = require('chai').expect;


describe('crypto/rsg', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@singleton']).to.equal(true);
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto/RSG');
  });
  
  describe('created object', function() {
    var rsg = factory();
    
    it('should conform to interface', function() {
      expect(rsg).to.be.an('object');
      expect(rsg.generate).to.be.a('function');
    });
  });
  
});
