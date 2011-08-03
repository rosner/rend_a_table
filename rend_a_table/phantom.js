var exec = require("child_process").exec;

function renderImage(response) {

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.write(stdout);
        response.end();
    });

}

exports.renderImage = renderImage;
