/* global describe, it */

var expect = require('chai').expect;
var source = require('..');


describe('bixby-crypto', function() {
  
  it('should export manifest', function() {
    expect(source).to.be.an('object');
    expect(source['']).to.be.a('function');
    expect(source['keygenerator']).to.be.a('function');
    expect(source['rsg']).to.be.a('function');
  });
  
  describe('-/', function() {
    var main = source[''];
    
    it('should be annotated', function() {
      expect(main['@singleton']).to.equal(true);
      expect(main['@implements']).to.equal('http://i.bixbyjs.org/crypto');
    });
  });
  
  describe('-/rsg', function() {
    var rsg = source['rsg'];
    
    it('should be annotated', function() {
      expect(rsg['@singleton']).to.equal(true);
      expect(rsg['@implements']).to.equal('http://i.bixbyjs.org/crypto/RSG');
    });
  });
  
});
