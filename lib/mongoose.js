var mongoose    = require('mongoose');
var config      = require('./config');
mongoose.connect(config.get('mongoose:uri'));
var db = mongoose.connection;

db.on('error', function (err) {
    console.log('connection error:', err.message);
});
db.once('open', function callback () {
    console.log("Connected to DB!");
});

var Schema = mongoose.Schema;

var Messages = new Schema({
    title: { type: String},
    text: { type: String, required: true},
    author: { type: Schema.Types.ObjectId, ref:'Users'},
    date: {type: Date }
});

var Rooms = new Schema({
	title: {type: String},
	messagesId: [{type: Schema.Types.ObjectId, ref:'Messages'}]
});

var Users = new Schema({
	login: {type:String},
	password: {type: String}
});
var MessagesModel = mongoose.model('Messages', Messages);
var RoomsModel = mongoose.model('Rooms', Rooms);
var UsersModel = mongoose.model('Users', Users);

module.exports.MessagesModel = MessagesModel;
module.exports.RoomsModel = RoomsModel;
module.exports.UsersModel = UsersModel;
