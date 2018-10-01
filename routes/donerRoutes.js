var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Donation = require('../app/models/donerModel');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', function(req, res){
  res.send('welcome to blood donation Route');
});

router.post('/register', function(req, res,next){
   
var donation = new Donation();
donation.name = req.body.name
donation.phone = req.body.phone;
donation.email = req.body.email;
donation.lastDonated = req.body.lastDonated;
donation.group = req.body.group;
donation.district = req.body.district;
donation.address = req.body.address;

donation.save(function(err){
	if(err)
		res.send(err);
	
})
res.redirect('/donation/getdoners')

   });

router.get('/getdoners', function(req,res){
	Donation.find({},function(err,donation){
		if(err)
			res.send(err);
		res.json(donation);
	})
});

router.delete('/delete/:id', function(req, res){
 

  let query = {_id:req.params.id}

  Donation.findById(req.params.id, function(err, donation){
   
      Donation.remove(query, function(err){
        if(err){
          console.log(err);
        }
        res.send('Success');
      });
    
  });
});



router.post('/update/:id', function(req, res,next){
   
let donation = {};
donation.name = req.body.name
donation.phone = req.body.phone;
donation.email = req.body.email;
donation.lastDonated = req.body.lastDonated;
donation.group = req.body.group;
donation.district = req.body.district;
donation.address = req.body.address;

let query = {_id:req.params.id}

Donation.update(query,donation,function(err){
	if(err)
		res.send(err);
	
})
res.redirect('/donation/getdoners');

   });



//export this router to use in our index.js
module.exports = router;