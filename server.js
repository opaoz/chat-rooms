var express= require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');
var path = require('path');
var config = require('./lib/config');
var mongoose = require('./lib/mongoose');

var app = express();
var server = require('http').Server(app);

//

app.engine('html', ejs.renderFile);
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public/')));

//
app.get('/',function(req, res, callback){
	res.render('index.html');
});

app.get('/api/rooms', function(req, res, callback){
	return mongoose.RoomsModel.find({}, function(err, Rooms){
		if(err){ 
			return res.status(500).send(err);
		}
		return res.send(Rooms);
	});
});

server.listen(3002, function(){
	console.log('server starts');

});


