
function route(handle, pathname, response, postData) {
    console.log("About to route a request for " + pathname);
    console.log(typeof response);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Sorry, the requested page is not found");
        response.end();
    }
}

exports.route = route
