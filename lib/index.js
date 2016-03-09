exports = module.exports = function crypto(id) {
  var map = {
    'keyring': './keyring',
    'rsg': './rsg'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.register('keyring');
  container.register('rsg');
};
