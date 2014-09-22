var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost/manualapp',
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'mongodb://ManualApp:CrossBull81@ds033400.mongolab.com:33400/manualapp',
    port: process.env.PORT || 3030
  }
};