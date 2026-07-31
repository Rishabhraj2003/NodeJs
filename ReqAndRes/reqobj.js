const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Server started ");
    // console.log(req);
    console.log(res);
    console.log("url ",req.url);
    console.log("method",req.method);
    console.log(req.headers);
    console.log(req.httpVersion);
    console.log(req.socket);
    console.log(req.rawHeaders);
    console.log(req.trailers);
    console.console.log(req);
    }
);

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});