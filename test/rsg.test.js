/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../lib/rsg');


describe('crypto/rsg', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto/RSG');
    expect(factory['@singleton']).to.equal(true);
  });
  
  describe('RSG', function() {
    var rsg = factory();
    
    it('should conform to interface', function() {
      expect(rsg).to.be.an('object');
      expect(rsg.generate).to.be.a('function');
    });
    
    
    describe('#generate', function() {
      it('should generate string', function() {
        var str = rsg.generate(32);
        expect(str).to.be.a('string');
        expect(str).to.have.length(32);
      });
    
      it('should generate random strings', function() {
        var str1 = rsg.generate(32);
        var str2 = rsg.generate(32);
        
        expect(str1).to.not.be.equal(str2);
      }); // #generate
    });
  });
  
});
