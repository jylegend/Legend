git命令行（分支创建和提交代码）
/*参考http://www.cnblogs.com/sk-net/archive/2011/07/11/2103282.html*/
新建分支：git branch <分支名>
进入分支或者进入master：git checkout <分支名>或者master
文件提交：git add <文件名>
合并到主干：git checkout master -> git merge <分支名> ->git commit -m '嵌入文件的描述'

/*参考http://blog.csdn.net/w13770269691/article/details/38704941*/
提交到远程：git remote add origin https://github.com/18016022862/Legend/ -> git push origin master


git创建本地git仓库
命令：mkdir Git
cd Git
初始化git仓库：git init
git remote -v 查看当前目录下是否有远程仓库
没有则创建一个：git remote add origin https://github.com/18016022862/Legend.git
拷贝远程的代码到本地：git clone https://github.com/18016022862/Legend.git

将本地代码提交到远程服务器：git push origin master



