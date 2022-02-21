const devConfig = require('./dev');
const prodConfig = require('./prod');

const env = process.env.NODE_ENV; 
if (env === 'production') {
  module.exports = prodConfig;
} else {
  module.exports = devConfig;
};