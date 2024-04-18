const express = require('express');
const app = express();
const http = require('http');

const { Server } = require("socket.io");
const server = http.createServer(app); 

const io = new Server(server, {
  cors:{
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});



io.on('connection', (socket) => {
  console.log(`User is Connected: ${socket.id}`);
  
  // socket.emit('Welcome', "Welcome to the channel");
  socket.on("join_room", (data) =>{
    socket.join(data)
  })
  socket.on('send_message', (data) => {
    // console.log('client user', data);
    socket.to(data.room).emit("recieve_message", data )
  });
  
  // Add more event handlers as needed
});

server.listen(3002, ()=>{
  console.log("Server is Running")
})
// console.log('Socket.io server running on port 3001', io);







// // server/server.js

// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const { sequelize, testConnection } = require('./dbConnection'); // Import Sequelize and the testConnection function

// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server);

// // Test the database connection
// testConnection();

// // Other server setup and routes go here

// server.listen(3001, () => {
//     console.log('Server is running on port 3000');
// });

// const express = require('express');
// const { createServer } = require('node:http');

// const app = express();
// const server = createServer(app);

// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// server.listen(3001, () => {
//   console.log('server running at http://localhost:3000');
// });