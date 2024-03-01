const { User } = require('../models')

module.exports = {
	index,
	add,
	delete: destroy,
}

async function index(req, res, next) {
	const user = await User.findById(req.body._id)
	try {
		res.status(200).json({
			status: 'success',
			favorites: user.favorites,
		})
	} catch (error) {
		res.status(400).json(error)
	}
}

async function add(req, res, next) {
	const user = await User.findById(req.body._id)
	user.favorites.push(req.body.recipeID)
	try {
		res.status(201).json(await user.save())
	} catch (error) {
		res.status(400).json(error)
	}
}

async function destroy(req, res, next) {
	const { userId, recipeID } = req.body
	try {
		const user = await User.findById(userId)
		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		user.favorites.id(recipeID).deleteOne()
		res.status(200).json(await user.save())
	} catch (error) {
		res.status(400).json(error)
	}
}
