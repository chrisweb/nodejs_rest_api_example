// set the environment variable if it was not set by the administrator
// NODE_ENV can be "development", "staging" or "production"
if (typeof(process.env.NODE_ENV) === 'undefined') {

    process.env.NODE_ENV = 'production';

}

module.exports = require('./application/bootstrap.js');