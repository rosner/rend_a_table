var exec = require("child_process").exec;

function render(response) {
    console.log("invoked the render handler with argument " + typeof response);
    exec("ls -lah", function (error, stdout, stderr) {
        console.log(stdout);

        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });
}

function howto(response) {
    console.log("You should see the howto now");

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Sorry no How-To yet");
    response.end();
}

exports.howto = howto;
exports.render = render;
