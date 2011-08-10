var http = require("http");
var url = require("url");
var formidable = require("formidable");
var util = require("util");
var helpers = require("./helpers");

function start(route, handle) {

    function onRequest (request, response) {
        if(request.url == '/render' && request.method.toLowerCase() == 'post') {
            
            var form = new formidable.IncomingForm();
            form.parse(request, function(error, fields, files) {
                if (error != null) {
                    response.writeHead(500, {"Content-Type":"text/plain"});
                    response.write("Something went wrong: " + error);
                    response.end();
                } 
               
                //@TODO: 
                //- change that later so that the user can upload more than one file, field but just the first is given?
                var validPostData = Object.keys(fields).length == 1 || Object.keys(files).length == 1;

                if (!validPostData) {
                    response.writeHead(204, {"Content-Type": "text/plain"});
                    response.write("Either provide ONE field or ONE file!");
                    response.end();
                }

                var postData = null;
                var fieldsKeys = Object.keys(fields);
                if (fieldsKeys.length == 1) {
                    postData = fields[fieldsKeys[0]];
                } else {
                    postData = files[Object.keys(files)[0]];
                }

                //console.log(util.inspect(postData));
                // do the actual routing and handling of the request with the extracted post data 
                route(handle, '/render', response, postData);
            });
            //return;
        } else {
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Move along! Nothing to see here!\nUse /render and POST 'multipart/form-data'!");
            response.end();
        }
    
    }

    var server = http.createServer(onRequest);
    server.listen(8888);
    console.log('Server started on port 8888');
}


exports.start = start;
