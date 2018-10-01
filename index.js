const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000

var routes = require('./routes/routes.js')

app.use('/routes', routes)
app.get('/',function(req,res){
	res.send('Welcome to Node Project');
})


app.listen(PORT);
console.log("listening on port"+PORT);

