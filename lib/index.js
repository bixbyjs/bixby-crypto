exports = module.exports = function crypto(id) {
  var map = {
    'keyring': './keyring'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.register('keyring');
};
