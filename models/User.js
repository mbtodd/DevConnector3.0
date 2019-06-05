const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const UserSchema = new mongoose.Schema({
	name     : {
		type     : String,
		required : true
	},
	email    : {
		type    : String,
		require : true,
		unique  : true
	},
	password : {
		type     : String,
		required : true
	},
	avatar   : {
		type : String
	},
	date     : {
		type    : Date,
		default : Date.now
	}
});

module.exports = User = mongoose.model('users', UserSchema);
