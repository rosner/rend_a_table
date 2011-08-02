//TODO:
//- css styles
//- correct size, that means, calculate once than resize the viewport and then render
//- node.js app
//- cleanup html before
//- chef provisioning
//- pngcrush?


if (phantom.args.length === 2) {
    
    var input_url = phantom.args[0];
    var file_name = phantom.args[1];
    
    var page = new WebPage();
    page.viewportSize = {width: 1280, height:768};
    page.settings.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.107 Safari/535.1';
    page.settings.loadImages = 'yes';
    //page.settings.proxy = 'http://192.168.2.108:8888'

    page.open('file://'+ input_url, function (status) {
        if (status !== 'success') {
            console.log('something went wrong');
        } else {
            console.log('Seemed to work');
            page.render(file_name);
        }
        phantom.exit();
    });
} else {
    console.log('Not enough arguments given!\nUsage:\n\tphantomjs render.js input_url file_name\n\
            \t\tinput_url - the path to the html snippet. file:// protocol is prefixed!\n\
            \t\tfile_name - the file name to render the image. It MUST end with \'.png\'');
    phantom.exit(1);
}
