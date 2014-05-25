### 使用
由于我个人是对tianshu 这个软件包进行了修改,主要是修改了它的默认生成文件后缀名,还有就是它的异步文件写入改为同步写入.所以,不可以直接通过npm install tianshu 来安装了.
我正在努力的改进这个包.
大家通过下载安装包.
> node app.js || supervisor app.js

> 注意了,在config.js 文件中,有一个配置文件 debug:true | false.
当为true的时候,我们视图下的index.ejs将会在每次访问的时候进行刷新.
如果为false的时候,则不会刷新.有利于加快访问速度.
