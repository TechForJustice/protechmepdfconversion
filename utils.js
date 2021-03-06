// utils.js
// var exports = module.exports = {};

var crypto = require('crypto');
var algorithm = 'aes-256-ctr';
var secret = process.env.CRYPTO_SECRET;


exports.encrypt = function(text) {
   var cipher = crypto.createCipher(algorithm, secret);
   var crypted = cipher.update(text,'utf8','hex');
   crypted += cipher.final('hex');
   return crypted;
}

exports.decrypt = function(text) {
   var decipher = crypto.createDecipher(algorithm, secret);
   var dec = decipher.update(text,'hex','utf8');
   dec += decipher.final('utf8');
   return dec;
}
