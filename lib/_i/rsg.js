var cryptiles = require('cryptiles');

function RSG() {
}

RSG.prototype.generate = function(size) {
  var random = cryptiles.randomString(size);
  if (random instanceof Error) {
    throw random;
  }
  return random;
}


module.exports = RSG;
