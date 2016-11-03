var http = require('http');
var server = http.createServer(function(req,res){
	req.setEncoding('utf8')
	req.on('data',function(chunk){
		console.log(chunk)
	})
	console.log(req.headers)
	res.end('123');
})
server.listen(3000);