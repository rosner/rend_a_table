var http = require("http");
var url = require("url");
var formidable = require("formidable");
var sys = require("sys");

function start(route, handle) {

    function onRequest (request, response) {
        if(request.url == '/render' && request.method.toLowerCase() == 'post') {
            
            var form = new formidable.IncomingForm();
            form.parse(request, function(error, fields, files) {
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.end(sys.inspect({fields:fields, files:files}));
            });
            return;
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Nooooooooooo! Use POST instead!");
            response.end();
        }
    }

    var server = http.createServer(onRequest);
    server.listen(8888);
    console.log('Server started on port 8888');
}

exports.start = start;
