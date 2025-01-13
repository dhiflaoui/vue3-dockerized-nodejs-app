const uWS = require("uWebSockets.js");

const port = 8080;

uWS
  .App()
  .ws("/*", {
    open: (ws) => {
      console.log("A new client connected!");
      ws.send("Welcome to the uWebSockets.js server!");
    },
    message: (ws, message, isBinary) => {
      const messageString = Buffer.from(message).toString();
      console.log(`Received: ${messageString}`);
      ws.send(`Hello, you sent -> ${messageString}`, isBinary);
    },
    close: (ws, code, message) => {
      console.log("A client disconnected");
    },
  })
  .listen(port, (token) => {
    if (token) {
      console.log(`WebSocket server running on port ${port}`);
    } else {
      console.error("Failed to start WebSocket server");
    }
  });
