// MEAN Stack RESTful API Tutorial - Contact List App

var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function (req, res) {
  console.log('I received a GET request');
  db.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
});

app.post('/contactlist', function (req, res) {
  console.log(req.body);    
  let emp = req.body;
    db.query('INSERT INTO users SET ?', [emp], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
});

app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })    
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
  db.query('SELECT * FROM users WHERE id =?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
});

app.put('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  let emp = req.body;
    
  db.query('UPDATE users SET ? WHERE id = ?', [emp, id], (err, rows, fields) => {
        if (!err)
            res.json(rows);
        else
            console.log(err);
    })
    
});

app.listen(3000);
console.log("Server running on port 3000");