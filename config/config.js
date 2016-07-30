var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

// TODO: put your database informations here
var dbPath = 'mongodb://<dbUsername>:<dbPassword>@<dbDomainName>:<dbPort>/<dbName>';

dbPath = 'mongodb://ilyes:cosplay222@ds031895.mlab.com:31895/url-shortener';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: dbPath
  },

  test: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: dbPath
  },

  production: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: dbPath
  }
};

module.exports = config[env];
