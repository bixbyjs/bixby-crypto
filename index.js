exports = module.exports = function crypto(id) {
  var map = {
    '': './xom/main',
    'keygenerator': './xom/keygenerator',
    'rsg': './xom/rsg',
    'rsa/keygen': './xom/rsa/keygen'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  container.add(''); // main
  
  container.add('keygenerator');
  container.add('rsg');
  
  container.add('rsa/keygen');
};
