r = require('rethinkdb');
var connection = null;

var getConnection = function(cb) {
    if(connection) {
        return connection;
    }  
    else {
        r.connect( {host: 'rethinkdb', port: 28015}, function(err, conn) {
            if (err) throw err;
            connection = conn;
            initializeDb();
            if(cb) {
                cb(connection);
            }
        });
    }
}

var initializeDb = function() {
    r.db('test').tableCreate('robots').run(connection, function(err, result) {
        if(err) {
            console.warn('Error while creating table \'robots\': ', err);
        }
    });
    r.db('test').tableCreate('users').run(connection, function(err, result) {
        if(err) {
            console.warn('Error while creating table \'users\': ', err);
        }
        else {
            r.table("users").indexCreate("email").run(connection);                                
        }
    });
}

module.exports = {
    getConnection: getConnection
}