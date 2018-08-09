'use strict'
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    console.log(request.url);
    switch (request.url) {
        case '/':
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('slide.html').pipe(response);
            break;

        case '/favicon.ico':
            break;

        default:
            console.log(request.url);
            switch(request.url.slice(-3)){
                case 'png':
                    response.writeHead(200, { 'Content-Type': 'image/png' });
                    break;
                case 'jpg':
                    response.writeHead(200, { 'Content-Type': 'image/jpeg' });
                    break;
                default:
                    break;
            }
            //response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.createReadStream('./'+request.url).pipe(response);
            break;
    }

});
server.listen(8080);
console.log('server runing');