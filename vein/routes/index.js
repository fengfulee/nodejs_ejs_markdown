
/*
 * GET home page.
 */

var path = require('path')
  , fs = require('fs');  
/*文件似乎存在的函数。。*/
function isExist(filename){
  var file_ejs = './views/'+filename+'.ejs';
  var file_tpl = './views/'+filename+'.tpl';
  var exists = fs.existsSync(file_ejs);
  var tianshu = require('tianshu');
  if(!exists) {
	tianshu(file_tpl);
  }else{
	var config = require('../config');
      	if(config.debug){
		//删除ejs文件，然后重新生成。
		fs.unlink(file_ejs);	
		tianshu(file_tpl);
	}
  }
}
exports.index = function(req, res){
  base = path.basename('.');
  res.render('index',
	{ title: 'Express',base:base });
};

exports.tianshu = function(req,res){
  isExist('tianshu/index');
  res.render('tianshu/index',{
	layout:"layout_markdown",
	title:"天书技术文档"
  });
};

exports.self = function(req,res){
  isExist('self/index');
  res.render('self/index',{
	layout:"layout_markdown",
	title:"本网站实现原理"
  });
};

exports.markdown = function(req,res){
  isExist('markdown/index');
  res.render('markdown/index',{
	layout:'layout_markdown',
	title:"markdown 入门知识"
  });
};
