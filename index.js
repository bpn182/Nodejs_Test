var express = require('express');
var app = express();
var PORT = 8000;

var routes = require('./routes/routes.js')

app.use('/routes', routes)


app.listen(PORT);
console.log("listening on port"+PORT);

