// //请求（require）Node.js自带的 http 模块，并且把它赋值给 http 变量
// var http=require('http');
// //创建一个nodejs服务器
// http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.write('This is My Nodejs');
// 	res.end();
// }).listen(8000);
	

var http=require('http');
var url=require('url');

function foo(route){
	http.createServer(function Start(req,res){
	var pathname=url.parse(req.url).pathname;
	console.log('Start at '+pathname+' now1.');
	route(pathname);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.write('This is My Nodejs');
	res.end();
	}).listen(8000);
}
exports.start=foo;



