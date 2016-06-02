var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var models=require("../mongodb");
var User=models.User;
mongoose.connect("mongodb://127.0.0.1:27017/legend");
var logger = require('../log').logger;  
logger.info("test");
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Good Study' });
// });


// module.exports = router;

exports.index=function(req,res){

		var _use=new User({
			Name:"Jiangyuan",
			PassWord:"123456"
		});
		_use.save();
		res.render('index',{title: '美在于心'});
}

exports.users=function(req,res){

	User.find(function(err,doc){
		res.render('users',{
			title:'个人中心',
			message:doc
		})
	});

}

exports.login=function(req,res){
	res.render('login',{title: '登录信息'});

}

exports.dologin=function(req,res){
		User.find({Name:'Jiangyuan'},function(err,item){
			if(err) throw err;
			console.log("Find Success....");
			console.log(item);
		})


		res.redirect('/users');
		// if(!_isReg)
		// {
		// 	var _isLogin=User.find({Name:req.body.username,PassWord:req.body.password});
		// 	if(!_result)
		// 	{
		// 		res.redirect('/users');
		// 	}
		// 	else
		// 	{
		// 		res.render('login',{title: '登录信息',message:"登录失败，用户名或者密码错误！"});
		// 	}	
		// }
		// else
		// {
		// 	new User({Name:req.body.username,PassWord:'123456'}).save();
		// 	res.render('index',{title: '美在于心',message:"未注册，请先注册！"});
		// }
		res.end();
}


exports.error404=function(req,res){
	res.render('404',{title: '页面找不到了'});
}