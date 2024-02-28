const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

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
			validate: {
				// This validation only works on CREATE and SAVE
				validator: function (el) {
					return el === this.password
				},
				message: 'Passwords are not the same!',
			},
		},
		favorites: [favoriteSchema],
	},
	{ timestamps: true }
)

// Pre save middleware - perfect time to manipulate the data
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next()

	this.password = await bcrypt.hash(this.password, 12)
	this.passwordConfirm = undefined
	next()
})

module.exports = mongoose.model('User', userSchema)
