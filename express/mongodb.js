var mongodb=require("mongoose");

var Schema=mongodb.Schema;

var _User=new Schema({
	Name:String,
	Age:Number,
	email:String,
	PassWord:String
});
exports.User=mongodb.model('User',_User); 