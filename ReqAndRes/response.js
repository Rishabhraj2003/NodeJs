const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server started");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello World</h1>");
  res.write("<p>This is a response from the server.</p>");  
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
