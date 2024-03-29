"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
  // if you want to check the API HTTP METHOD
  // use req.method

  console.log("request method : ", req.method);

  if (req.url == "/") {
    console.log("home page");
    res.writeHead(200, { "Content-Type": "text" });
    res.write("welcome to home page...!!!");
    res.end();
  } else if (req.url == "/about") {
    console.log("about page");
    res.writeHead(200, { "Content-Type": "text" });
    res.write("you are about to see the about page");
    res.end();
  } else {
    console.log("not found");
    res.writeHead(404, { "Content-Type": "text" });
    res.write("page not found");
    res.end();
  }
});

server.listen(13000, (req, res) => {
  console.log("server started listening...!!!");
});
