var http = require("http");
var url = require("url");

function start(route, handle) {

    function onRequest (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        route(handle, pathname, response);
    }

    var server = http.createServer(onRequest);
    server.listen(8888);
    console.log('Server started on port 8888');
}

exports.start = start;
