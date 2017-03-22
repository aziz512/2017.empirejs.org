var st = require('st');
var http = require('http');

http.createServer(
  st({
    path: process.cwd(),
    url: '/',
    index: 'index.html'
  })
).listen(process.env.PORT || 6090)
