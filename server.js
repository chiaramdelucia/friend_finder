//Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');


//Initialize Express and local host
// =============================================================
var app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname));
app.use(express.static('./app/public'));
app.use(express.static('./app/data'));

//Friends (DATA)
// =============================================================
var friends = require('./app/data/friends.js');

//API Routes
// =============================================================
app.get('/api/friends', function (req, res){	
	res.json(friends);
	console.log(friends);
	
});

app.post('/api/friends', function (req, res){
	friends.push(req.body);
	
	
});

//HTML Routes
//=============================================================
app.get('/survey', function (req, res){
	res.sendFile(path.join(__dirname, '/app/public/survey.html'));

});

app.get('/', function (req, res){
	res.sendFile(path.join(__dirname, '/app/public/home.html'));

});


//Listen on port 3000
// =============================================================
app.listen(PORT, function(){
	console.log('Listening on Port ' + PORT);
});