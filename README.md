# Node.js Server Port Already in Use Error

This repository demonstrates a common error encountered when running Node.js servers: the port you're trying to use is already occupied by another process.

## The Bug

The `bug.js` file contains a simple HTTP server that attempts to listen on port 8080. If this port is already in use (e.g., by another Node.js server or a different application), the server will fail to start.

## The Solution

The `bugSolution.js` file presents several approaches to handle this situation: 
1. Check if the port is available before starting the server.
2. Start the server on a different port if 8080 is unavailable.
3. Use a process manager like PM2 that gracefully handles port conflicts and restarts the server automatically if there is an issue.

This example is designed to be simple and understandable. Real-world applications may involve more complex error handling and resource management techniques.