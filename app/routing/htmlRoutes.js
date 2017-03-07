const path = require ('path');

//HTML Routes
//=============================================================
module.exports = function(app){
	app.get('/survey', function (req, res){
		res.sendFile(path.join(__dirname, '/../public/survey.html'));

	});

	app.get('mighty-savannah-84234.herokuapp.com/', function (req, res){
		res.sendFile(path.join(__dirname, '/../public/home.html'));

	});
};