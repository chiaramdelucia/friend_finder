//API Routes
// =============================================================
app.get('/api/friends', function (req, res){
	res.json(friends);
	console.log(friends)
});

app.post('/api/friends', function (req, res){
	
});
