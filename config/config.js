var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://ilyes:cosplay222@ds031895.mlab.com:31895/url-shortener'
  },

  test: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://ilyes:cosplay222@ds031895.mlab.com:31895/url-shortener'
  },

  production: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://ilyes:cosplay222@ds031895.mlab.com:31895/url-shortener'
  }
};

module.exports = config[env];
