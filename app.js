// require all the needed modules

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var config = require('./config');

var setupcontroller = require('./controllers/setupcontroller');
var apicontroller = require('./controllers/apicontroller');

//creating port which we want to run in
var port = process.env.PORT || 3000;

app.set('view engine','ejs');

//connect database here

mongoose.connect(config.getdbconnectionstring());

setupcontroller(app);
apicontroller(app);
app.listen(port);
