var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationSchema = new Schema({
	name: String,
	phone: Number,
	email: String,
	lastDonated: Date,
	group: String,
	district: String,
	address: String
});

module.exports = mongoose.model('Donation',DonationSchema);
