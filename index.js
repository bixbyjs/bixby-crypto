exports = module.exports = function crypto(id) {
  var map = {
    '': './xom/main',
    'keygenerator': './xom/keygenerator',
    'keyring': './xom/keyring',
    'keyring/symmetric': './xom/keyring/symmetric',
    'rsg': './xom/rsg'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add(''); // main
  
  container.add('keygenerator');
  container.add('keyring');
  container.add('rsg');
  
  container.add('keyring/symmetric')
};
