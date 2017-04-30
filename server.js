// Getting access to all 'express' API's
var express = require('express');

// Create our app
var app = express();

// What port Heroku wants to use
const PORT = process.env.PORT || 3000;

// Redirect https traffic to http- because openWeatherMap only supports http
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

// Connecting to index.html file which is in folder public
app.use(express.static('public'));

// Listening on port
app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
