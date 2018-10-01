const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const path = require('path')
const mongoose = require('mongoose')
//mongoose.connect('mongodb://localhost/bpndb');
mongoose.connect('mongodb://Bipin:q1w2e3r4t5@ds119853.mlab.com:19853/cosmosdb');



var routes = require('./routes/routes.js')
var donerRoutes = require('./routes/donerRoutes.js')


app.use('/routes', routes)
app.use('/donation', donerRoutes)

//for checking main page working
app.get('/',function(req,res){
	res.send('Welcome to Node Project');
})



app.listen(PORT);
console.log("listening on port "+PORT);

