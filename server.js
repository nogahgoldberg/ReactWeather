// Getting access to all 'express' API's
var express = require('express');

// Create our app
var app = express();

// Connecting to index.html file which is in folder public
app.use(express.static('public'));

// Listening on port
app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
