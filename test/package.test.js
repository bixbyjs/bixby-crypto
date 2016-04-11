/* global describe, it */

var pkg = require('..');
var expect = require('chai').expect;


describe('bixby-crypto', function() {
  
  it('should export object', function() {
    expect(pkg).to.be.a('function');
  });
  
});
