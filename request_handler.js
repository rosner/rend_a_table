var querystring = require("querystring");
var helpers = require("./helpers");
var phantom = require("./phantom");
var util = require("util");

function render(response, postData) {

    console.log(util.inspect(postData));

    phantom.renderImage(response);

}

function howto(response, postData) {
    console.log("You should see the howto now");

    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Sorry no How-To yet");
    response.end();
}

exports.howto = howto;
exports.render = render;
