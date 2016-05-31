var express = require('express');
var router = express.Router();
var mongoose=require("mongoose");
var models=require("../mongodb");
var User=models.User;
mongoose.connect("mongodb://127.0.0.1:27017/legend");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Good Study' });
// });


// module.exports = router;

exports.index=function(req,res){
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
	var user=new User({
		Name:req.body.username,
		Age:25,
		Email:"787113172@qq.com"
	});
	user.save();
	
	var err='';
	res.redirect('/users');
	res.end();
	console.log(req.body.password);
	// res.send({err:'用户名或密码输入错误，请重新输入'});
	// 
	// res.redirect('/login');
	// res.render('login',fu)
	res.end();
}


exports.error404=function(req,res){
	res.render('404',{title: '页面找不到了'});
}