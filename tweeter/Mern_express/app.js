var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
// var http = require('<http://localhost:3001>'); 
// var socketIo = require('socket.io');



// routes
// var routes = require("./routes/userRouter")
var Authrouter = require("./routes/Authroutes")
var userRouter = require("./routes/userRouter")
var chatrouter = require("./routes/chatrouter")
var ThreadRouter = require("./routes/ThreadRouters")
var app = express();
// var server = http.createServer(app);
// Initialize Socket.IO after creating the server instance
// var io = socketIo(server);

// // Socket.IO event handling
// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });

//   // Add more event handlers as needed
// });

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
require('./bin/dbConnection');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Apply CORS middleware without the trailing comma
app.use(cors());

// app.use("/user", routes);
app.use("/authUser", Authrouter);
app.use("/user", userRouter);
app.use("/chat", chatrouter )
app.use("/thread", ThreadRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Start the server
// const port = process.env.PORT || 3001;
// server.listen(port, () => {
//   console.log(`Server is running on port ${3001}`);
// });

module.exports = app;