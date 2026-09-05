const http = require("http");

const message = "Hello from Jenkins and Docker!";

const server = http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(message);
});

server.listen(3000, () => {
    console.log("Application is running on port 3000");
});

module.exports = message;
