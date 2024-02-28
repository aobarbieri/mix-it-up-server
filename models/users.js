const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Embedding - child subdocument (favorite) is embedded within its parent document (user)
// Here is One - to - many- relationship ---<
const favoriteSchema = new Schema(
	{
		recipeID: { type: String, required: true },
	},
	{ timestamps: true }
)

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		avatar: String,
		favorites: [favoriteSchema],
		// googleId: { type: String, required: true },
	},
	{ timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
