/* global describe, it */

var pkg = require('..');
var expect = require('chai').expect;


describe('bixby-crypto', function() {
  
  it('should export manifest', function() {
    expect(pkg).to.be.an('object');
    expect(pkg['']).to.be.a('function');
    expect(pkg['keygenerator']).to.be.a('function');
    expect(pkg['rsg']).to.be.a('function');
  });
  
});
