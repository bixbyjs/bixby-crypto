exports = module.exports = function crypto(id) {
  var map = {
    '': './main',
    'keyring': './keyring',
    'keyring/symmetric': './keyring/symmetric',
    'rsg': './rsg'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add(''); // main
  
  container.add('keyring');
  container.add('rsg');
  
  container.add('keyring/symmetric')
};
