var mongoose = require('mongoose');


module.exports = mongoose.model('Cow', {
	id: String,
	name: String,
	description: String,
	url: String,
	start: String,
	end: String
});