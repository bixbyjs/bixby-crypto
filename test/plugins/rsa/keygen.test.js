var forge = require('node-forge');
var expect = require('chai').expect;
var factory = require('../../../app/rsa/keygen');

describe('crypto/plugins/rsa/keygen', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal('http://i.bixbyjs.org/crypto/keygenFunc');
    expect(factory['@singleton']).to.be.undefined;
  });
  
  describe('keygen', function() {
    var keygen = factory();
    
    it('should conform to interface', function() {
      expect(keygen).to.be.a('function');
    });
    
    describe('generating a keypair', function() {
      this.timeout(10000);
      
      var pair;
      
      before(function(done) {
        keygen({}, function(err, _pair) {
          if (err) { return done(err); }
          pair = _pair;
          done();
        });
      })
      
      it('should generate public key', function() {
        expect(pair.publicKey).to.be.a('string');
        expect(pair.publicKey.indexOf('-----BEGIN PUBLIC KEY-----')).to.equal(0);
        
        var publicKey = forge.pki.publicKeyFromPem(pair.publicKey);
        expect(publicKey.n.toByteArray().length).to.equal(257);
        expect(publicKey.e.intValue()).to.equal(0x010001); // 65537
      });
      
      it('should generate private key', function() {
        expect(pair.privateKey).to.be.a('string');
        expect(pair.privateKey.indexOf('-----BEGIN RSA PRIVATE KEY-----')).to.equal(0);
      });
    });
    
    describe('generating a keypair with length', function() {
      this.timeout(10000);
      
      var pair;
      
      before(function(done) {
        keygen({ length: 1024 }, function(err, _pair) {
          if (err) { return done(err); }
          pair = _pair;
          done();
        });
      })
      
      it('should generate public key', function() {
        expect(pair.publicKey).to.be.a('string');
        expect(pair.publicKey.indexOf('-----BEGIN PUBLIC KEY-----')).to.equal(0);
        
        var publicKey = forge.pki.publicKeyFromPem(pair.publicKey);
        expect(publicKey.n.toByteArray().length).to.equal(129);
        expect(publicKey.e.intValue()).to.equal(65537);
      });
      
      it('should generate private key', function() {
        expect(pair.privateKey).to.be.a('string');
        expect(pair.privateKey.indexOf('-----BEGIN RSA PRIVATE KEY-----')).to.equal(0);
      });
    });
    
    describe('generating a keypair with exponent', function() {
      this.timeout(10000);
      
      var pair;
      
      before(function(done) {
        keygen({ exponent: 17 }, function(err, _pair) {
          if (err) { return done(err); }
          pair = _pair;
          done();
        });
      })
      
      it('should generate public key', function() {
        expect(pair.publicKey).to.be.a('string');
        expect(pair.publicKey.indexOf('-----BEGIN PUBLIC KEY-----')).to.equal(0);
        
        var publicKey = forge.pki.publicKeyFromPem(pair.publicKey);
        expect(publicKey.n.toByteArray().length).to.equal(257);
        expect(publicKey.e.intValue()).to.equal(17);
      });
      
      it('should generate private key', function() {
        expect(pair.privateKey).to.be.a('string');
        expect(pair.privateKey.indexOf('-----BEGIN RSA PRIVATE KEY-----')).to.equal(0);
      });
    });
    
  }); // keygen
  
});
