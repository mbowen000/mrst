var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

exports.cryptPassword = function(password, callback) {
   bcrypt.genSalt(10, function(err, salt) {
    if (err) 
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });
  });
};

exports.comparePassword = function(plainPass, hashword, callback) {
   bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
       return err == null ?
           callback(null, isPasswordMatch) :
           callback(err);
   });
};

exports.generateToken = function(user, callback) {
    const payload = {
        user: user 
    };
    var token = jwt.sign(payload, 'hahathisappisfake', {
        expiresIn: 1440 // expires in 24 hours
    });

    // return the information including token as JSON
    callback({
        token: token
    });
}