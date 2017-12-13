module.exports = {
    robots: robots,
    addVote: addVote,
    addRobot: addRobot,
    editRobot: editRobot,
    deleteRobot: deleteRobot
}
var r = require('rethinkdb');
var db = require('../helpers/db');
var fs = require('fs');
var uniqueFilename = require('unique-filename');
var os = require('os');
var p = require('path');

function robots(req, res) {

    // this sends back a JSON response which is a single string
    r.table('robots').pluck('id', 'name', 'imagePath').run(db.getConnection(), function(err, cursor) {
        if(err) throw err;
        cursor.toArray(function(err, result) {
            if(err) throw err;
            res.send(result);
        });
    });
}

function addVote(req, res) {
    var id = req.swagger.params.robotId.value;    
    r.table('robots').get(id).update({
        votes: r.row('votes').add(1)
    }).run(db.getConnection(), function(err, response) {
        if(err) {
            res.status(500).type('application/json').send({err: err});
        }
        else {
            res.type('application/json').status(200).end();            
        }
    });
}

function addRobot(req, res) {
    const file = req.swagger.params.file.value;
    const robotName = req.swagger.params.name.value;
    const path = __dirname + '/../../uploads';

    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }

    // grab the file extension (hacky but works for this)
    const ext = p.extname(file.originalname);

    var fileWithPath = uniqueFilename(path) + ext;

    var filename = p.basename(fileWithPath);
    
    console.log(fileWithPath);
    fs.writeFile(fileWithPath, file.buffer, function (err) {
        if (err) return console.log(err);
        r.table('robots').insert({
            name: robotName,
            imagePath: filename,
            votes: 0
        }, {returnChanges: true}).run(db.getConnection(), function(err, response) {
            if(err) {
                throw err;
                res.status(500).type('application/json').end();
            }
            else {
                console.log(response.changes[0].new_val);
                res.status(201).type('application/json').send(response.changes[0].new_val);                            
            }
        });
    });      

    
}

function editRobot(req, res) {
    const file = req.swagger.params.file.value;
    const robotName = req.swagger.params.name.value;
    const robotId = req.swagger.params.id.value;
    const path = __dirname + '/../../uploads';

    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }

    // grab the file extension (hacky but works for this)
    const ext = p.extname(file.originalname);

    var fileWithPath = uniqueFilename(path) + ext;

    var filename = p.basename(fileWithPath);
    
    console.log(fileWithPath);
    fs.writeFile(fileWithPath, file.buffer, function (err) {
        if (err) return console.log(err);
        r.table('robots').get(robotId).update({
            name: robotName,
            imagePath: filename
        }, {returnChanges: true}).run(db.getConnection(), function(err, response) {
            if(err) {
                throw err;
                res.status(500).type('application/json').end();
            }
            else {
                console.log(response.changes[0].new_val);
                res.status(201).type('application/json').send(response.changes[0].new_val);                            
            }
        });
    });      
}

function deleteRobot(req, res) {
    var id = req.swagger.params.robotId.value;

    r.table('robots').get(id).delete().run(db.getConnection(), function(err, response) {
        if(err) {
            res.type('application/json').status(500).send({err: err});
        }
        else {
            res.type('application/json').status(200).end();            
        }
    });

}