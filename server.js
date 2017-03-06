//Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');

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

//Routes
// =============================================================
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


//Listen on port 3000
// =============================================================
app.listen(PORT, function(){
	console.log('Listening on Port ' + PORT);
});