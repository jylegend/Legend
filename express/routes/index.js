var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Good Study' });
// });


// module.exports = router;

exports.index=function(req,res){
	res.render('index',{title: '美在于心'});
}

exports.users=function(req,res){
	res.render('users',{title: '个人中心'});
}

exports.login=function(req,res){
	res.render('login',{title: '登录信息'});
}

exports.dologin=function(req,res){
	var user={
		username:'admin',
		password:'123456'
	}
	var err='';
	if(req.body.username!=user.username )
	{
		err='用户名错误';
		return;
	}
	if(req.body.password!=user.password)
	{
		err='密码错误';
		return;
	}
	res.redirect('/users',{title:'个人中心',errorMsg:err});
}


exports.error404=function(req,res){
	res.render('404',{title: '页面找不到了'});
}