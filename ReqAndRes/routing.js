// Import the built-in 'http' module
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader("Content-Type", "text/html");

  // Start the HTML document
  res.write("<html>");

  // Common heading for all pages
  res.write("<h1>This is my first response from the server</h1>");

  // Routing logic — send different responses based on URL
  if (req.url === "/") {
    // Home page content
    res.write("<h2>Welcome to the Home Page</h2>");
  } else if (req.url === "/about") {
    // About page content
    res.write("<h2>About Us: We are a company dedicated to excellence.</h2>");
  } else if (req.url === "/contact") {
    // Contact page content
    res.write("<h2>Contact Us</h2>");
    res.write("<p>Email: info@example.com</p>");
  } else {
    // For any undefined routes
    res.write("<h2>404 Page Not Found</h2>");
  }

  // Close the HTML document
  res.write("</html>");

  // End the response (must always be called once per request)
  res.end();
});

// Define the port
const port = 3000;

// Start the server and listen on localhost
server.listen(port, "localhost", () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
