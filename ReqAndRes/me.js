// Import the built-in 'http' module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set content type for HTML response
  res.setHeader("Content-Type", "text/html");

  // Basic HTML structure with navigation and global CSS
  res.write(`
    <html>
      <head>
        <title>Rishabh's Node Server</title>
        <style>
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #eaf4fc;
            color: #222;
            text-align: center;
            margin: 0;
            padding: 30px;
          }
          nav {
            margin-bottom: 30px;
            background-color: #0078D7;
            padding: 15px;
            border-radius: 8px;
          }
          a {
            text-decoration: none;
            margin: 0 15px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.3s;
          }
          a:hover {
            color: #ffd700;
          }
          h1 {
            color: #0078D7;
          }
        </style>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/love">Love</a>
          <a href="/location">Location</a>
        </nav>
  `);

  // Routing logic
  if (req.url === '/') {
    res.write(`
      <h1>Hello, I am <span style="color:#ff5722;">Rishabh Raj</span> </h1>
      <p>Welcome to my first Node.js server! </p>
    `);
  } 
  else if (req.url === '/love') {
    res.write(`
      <style>body { background-color: pink; }</style>
      <h1 style="color: red;">I love  </h1>
      <p>Love makes the world a better place</p>
    `);
  } 
  else if (req.url === '/location') {
    res.write(`
      <h1>I live in <span style="color:#4caf50;">Etawah</span> /h1>
      <p>A beautiful city with a proud heart of Uttar Pradesh </p>
    `);
  } 
  else {
    // 404 Page for unknown routes
    res.write(`
      <h1 style="color:red;">404 - Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
    `);
  }

  // End HTML tags and response
  res.write(`</body></html>`);
  res.end();
});

// Server listens on port 3009
const port = 3009;
server.listen(port, () => {
  console.log(` Server is running at http://localhost:${port}`);
});
