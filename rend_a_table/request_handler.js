var exec = require("child_process").exec;
var querystring = require("querystring");

function render(response, postData) {
    console.log("invoked the render handler with argument " + typeof response);

    var uploadedText = querystring.parse(postData).text;
    console.log(uploadedText);

    exec("ls -lah", function (error, stdout, stderr) {
        console.log(stdout);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
}

function howto(response, postData) {
    console.log("You should see the howto now");

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Sorry no How-To yet");
    response.end();
}

exports.howto = howto;
exports.render = render;
