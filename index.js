var server = require("./server");
var router = require("./router");
var requestHandlers = require("./request_handler");

var handle = {};
//handle["/"] = requestHandlers.howto;
handle["/render"] = requestHandlers.render;

server.start(router.route, handle);

