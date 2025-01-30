const http = require('http');
const { isPortTaken } = require('./port-checker'); //Helper function to check for port availability 

const port = 8080;

async function startServer(port) {
  if (await isPortTaken(port)) {
    console.error(`Port ${port} is already in use. Trying port ${port + 1}`);
    startServer(port + 1); // Try next available port 
  } else {
    const requestListener = (request, response) => {
      response.writeHead(200);
      response.end('Hello, World!');
    };

    const server = http.createServer(requestListener);

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

startServer(port); 

//Helper function to check for port availability
//port-checker.js
const net = require('net');

async function isPortTaken(port) {
  return new Promise((resolve) => {
    const tester = net.createServer().once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(true);
      } else {
        resolve(false);
      }
    }).once('listening', () => {
      tester.close();
      resolve(false);
    }).listen(port);
  });
}