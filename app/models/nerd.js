var mongoose = require('mongoose');

var Nerd = mongoose.model('Nerd', {
	name: {type: String, default: ''}
});

module.exports = Nerd;
