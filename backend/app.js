'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var db = require('./api/helpers/db').getConnection();
var express = require('express');
var path = require('path');
var jwt = require('jsonwebtoken');

module.exports = app; // for testing
var config = {
  appRoot: __dirname, // required config
  swaggerSecurityHandlers: {
    jwt: function (req, authOrSecDef, scopesOrApiKey, cb) {
      // your security code
      console.log(authOrSecDef);
      console.log(scopesOrApiKey);

      jwt.verify(scopesOrApiKey, 'hahathisappisfake', function(err, decoded) {
          if(err) {
            console.error(err);
            cb(new Error('access denied!'));
          } else {
            cb(null);
          }
      });
      
    }
  }
}

// expose static files for images for robots
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log("Hello Robots!");
});
