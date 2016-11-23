/*路由模块*/
/*对于不同的 URL 请求，服务器应该有不同的反应*/
/*处理不同的 HTTP 请求在我们的代码中是一个不同的部分，叫做“路由选择”*/
function route(handle,pathname,response,postData) {
    console.log("About to route a request for "+pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response,postData);
    }else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404,{"Content-Type":"text/html"});
        response.write("404 Not Found");
        response.end;
    }
}
exports.route = route;