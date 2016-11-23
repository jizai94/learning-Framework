var server = require('./server');
var router = require('./router');
var requireHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requireHandlers.start;
handle["/start"] = requireHandlers.start;
handle["/upload"] = requireHandlers.upload;
server.start(router.route,handle);
