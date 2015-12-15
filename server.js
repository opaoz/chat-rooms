var express= require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var ejs = require('ejs');
var path = require('path');

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

server.listen(3001, function(){
	console.log('server starts');

});
