var express = require('express');
var mongoose = require('mongoose'); 
var bodyParser = require('body-parser')
app = express();
User = require('./api/models/users')
port = process.env.PORT || 3001;

console.log("starting off in index.js");

// configuration =================
mongoose.Promise = global.Promise;


var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + mongoDB);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/routes');
// routes(app)
app.use('/api',routes)

app.listen(port);

console.log('RESTful API server started on: ' + port);