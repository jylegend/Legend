一、安装
官网http://expressjs.com/
express4.X的有一些变化，4.x版本中将命令工具单独分出来了(https://github.com/expressjs/generator),所有要先按装express-generator，否则创建项目时，会提示express命令没找到

[plain] view plain copy print?在CODE上查看代码片派生到我的代码片
$ npm install -g express-generator #需先安装express-generator  
  
$ npm install -g express  
  
$ express -V  #验证是否安装成功  

二、创建项目

[plain] view plain copy print?在CODE上查看代码片派生到我的代码片
$ express myfirstexpress # express的默认模版采用jade，若需要ejs模版支持，加上-e选项，即 express -e myfirstexpress  
$ cd myfirstexpress  
  
$ ls  
app.js  bin  package.json  public  routes  views #项目的目录结构   

三、运行项目

[plain] view plain copy print?在CODE上查看代码片派生到我的代码片
$ npm install #需要等待一段时间，因为需要获取很多的库文件  
  
$ npm start  
  
> myfirstexpress@0.0.1 start /root/myfirstexpress  
> node ./bin/www  

四、访问第一个express项目

浏览器中输入 http://你的IP:3000

显示
[html] view plain copy print?在CODE上查看代码片派生到我的代码片
Express  
  
Welcome to Express  
说明express安装成功
