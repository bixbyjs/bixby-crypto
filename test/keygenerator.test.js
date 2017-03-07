/* global describe, it, expect */

var expect = require('chai').expect;
var factory = require('../app/keygenerator');


describe('crypto/keygenerator', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto/KeyGenerator');
    expect(factory['@singleton']).to.equal(true);
  });
  
  describe('KeyGenerator', function() {
    
    describe('constructing without plugins', function() {
      var keyGenerator;
      
      before(function(done) {
        var container = {
          specs: function(){ return[]; }
        };
        
        factory(container)
          .then(function(_keyGenerator) {
            keyGenerator = _keyGenerator;
            done();
          })
          .catch(function(err) {
            done(err);
          });
      });
      
      it('should conform to interface', function() {
        expect(keyGenerator).to.be.an('object');
        expect(keyGenerator.use).to.be.a('function');
        expect(keyGenerator.generate).to.be.a('function');
      });
      
    }); // constructing without plugins
    
  }); // KeyGenerator
  
});
