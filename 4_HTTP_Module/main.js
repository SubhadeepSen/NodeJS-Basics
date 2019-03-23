const http = require('http');

var server = http.createServer(function(request, response){
    if(request.url == '/'){
        response.write('Hello World');
        response.end();
    }

    if(request.url == '/api'){
        response.write(JSON.stringify([1,2,3,4,5]));
        response.end();
    }
});

server.listen(8081);
console.log('running server on port 8081 ...');