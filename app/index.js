exports = module.exports = {
  '': require('./main'),
  'keygenerator': require('./keygenerator'),
  'keyring': require('./keyring'),
  'keystore': require('./keystore'),
  'keystore/memory': require('./keystore/memory'),
  'rsg': require('./rsg')
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};
