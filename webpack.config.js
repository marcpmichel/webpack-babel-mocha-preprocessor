
module.exports = function(env) {
  var conf = require(`./conf/webpack.${env}.js`);
  return conf(env);
}
