const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		googleId: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		avatar: String,
		userType: String,
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
