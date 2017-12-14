var userHelper = require('../helpers/user'),
    r = require('rethinkdb'),
    db = require('../helpers/db');

module.exports = {
    register: register,
    login: login
}

function register(req, res) {
    var user = req.swagger.params.user.value;

    // encrypt the password and save the user
    console.log(user); 
    userHelper.cryptPassword(user.password, function(err, hash) {
        if(err) throw err;

        // make sure the user doesnt already exist:
        r.table('users').filter({
            email: user.email
        }).count().run(db.getConnection(), function(err, result) {
            if(err) throw err;
            if(result === 0) {
                r.table('users').insert({
                    name: user.name,
                    email: user.email,
                    password: hash
                }).run(db.getConnection(), function(err, result) {
                    if(err) throw err;
                    res.type('json').status(201).end();
                });
            }
            else {
                res.type('json').status(500).send({error: 'A user account with that name already exists.'});
            }
        });

        
    });
}

function login(req, res) {
    var user = req.swagger.params.user.value;

    // try to get that user from the database 
    r.table('users').filter({email: user.email}).run(db.getConnection(), function(err, cursor) {
       if(err) throw err;
       cursor.toArray(function(err, result) {
            if(err) throw err;
            if(result.length > 0) {
                // check the users password
                userHelper.comparePassword(user.password, result[0].password, function(err, isMatch) {
                    if(err) throw err;
                    if(isMatch) {
                        userHelper.generateToken(user, function(payload) {
                            res.type('json').status(200).send(payload);
                        });
                        
                    }
                    else {
                        res.type('json').status(500).send({error: 'Password incorrect'});
                    }
                });
            }
            else {
                res.type('json').status(500).send({error: 'Username not found.'});
            }
       });
    });
}