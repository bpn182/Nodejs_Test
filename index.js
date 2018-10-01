const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

var routes = require('./routes/routes.js')

app.use('/route', routes)


app.listen(PORT);
console.log("listening on port"+PORT);

