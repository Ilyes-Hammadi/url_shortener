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
    db: 'mongodb://localhost/url-shortener-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/url-shortener-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'url-shortener'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/url-shortener-production'
  }
};

module.exports = config[env];
