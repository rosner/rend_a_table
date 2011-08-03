
function route(handle, pathname, response, postData) {
    console.log(typeof response);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("Sorry, the requested page is not found");
        response.end();
    }
}

exports.route = route
