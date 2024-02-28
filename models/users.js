const mongoose = require('mongoose')
const Schema = mongoose.Schema
const validator = require('validator')

// Embedding - child subdocument (favorite) is embedded within its parent document (user)
// Here is One - to - many- relationship ---<
const favoriteSchema = new Schema(
	{
		recipeID: { type: String, required: true },
	},
	{ timestamps: true }
)

const userSchema = new Schema(
	{
		name: { type: String, required: [true, 'A name is required'] },
		email: {
			type: String,
			required: [true, 'A email is required'],
			unique: true,
			lowercase: true,
			validate: [validator.isEmail, 'Please provide a valid email'],
		},
		avatar: String,
		password: {
			type: String,
			required: [true, 'Please provide a passworde'],
			minlength: 8,
		},
		passwordConfirm: {
			type: String,
			required: [true, 'Please confirm your password'],
		},
		favorites: [favoriteSchema],
		// googleId: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', userSchema)
