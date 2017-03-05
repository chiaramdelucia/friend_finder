//Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require ('path');


//Initialize Express and local host
// =============================================================
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname));


//Listen on port 3000
// =============================================================
app.listen(PORT, function(){
	console.log('Listening on Port ' + PORT);
});