var http = require('http');
var fs = require('fs');
var join = require('path').join;
var parse = require('url').parse;
var root = __dirname;
var server = http.createServer(function(req,res){
	req.setEncoding('utf8')
	var url = parse(req.url);
  	var path = join(root, url.pathname);
  	fs.readFile(path,function(err, file){
  		res.end(file);
  	})
	console.log(req.url + '==' +url.pathname)
	/*req.on('data',function(chunk){
		console.log(chunk)
	})*/
	console.log(req.headers)
	// res.end('123');
})
server.listen(3000);

/*
如果在跨域情况下在客户端添加head头信息发送后KEY变为access-control-request-headers  ，但如果在同域下不会出现这种情况；
*/