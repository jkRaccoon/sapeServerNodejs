var express = require('express');
var app = express();
var host = "127.0.0.1";
var port = "2323";
 
app.get('/', function(req, res) {
	res.send('Sape API server - nj version');
	
});

app.get('/getData', function(req, res) {
    res.send([{name:'wine1'}, {name:'wine2'}]);
});
app.get('/getData/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});
app.listen(port,host);



console.log('Server running at http://'+host+':'+port+'/');