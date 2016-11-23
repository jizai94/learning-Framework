/* Node.js 是事件驱动的*/
/*服务器模块*/

/*createServer的函数参数是第一个参数，也是唯一一个参数*/
/*匿名函数：就是没有命名的韩式，例如function(){};*/

/*第一种代码形式*/
/*var http = require('http');
http.createServer(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<p>Hello World</p>");
    response.end();
}).listen(80);  /!*制定http服务器监听的端口号为80*!/
console.log("server has start");*/

/*第二种代码形式*/
/*var http = require('http');
function onRequest(request,response) {
    console.log('require received');
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("<p>Hello World</p>");
    response.end();
};
http.createServer(onRequest).listen(80);
console.log('Server has start');*/

/*请注意，当我们在服务器访问网页时，
我们的服务器可能会输出两次“ Request received. ” 。
那是因为大部分服务器都会在你访问 http://localhost时
尝试读取http://localhost/favicon.ico*/


/*创建服务器模块*/
var http = require('http');
var url = require('url');
var querystring = require('querystring');
function start(route,handle) {
    function onRequest(request,response) {
        console.log('require received');
        var postDate = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname + " received.");
        
        route(handle,pathname,response);
        
    }
    http.createServer(onRequest).listen(80);
    console.log('Server has start');
}
exports.start = start;





