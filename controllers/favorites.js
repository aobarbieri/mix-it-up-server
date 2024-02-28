const { User } = require('../models')

module.exports = {
	create,
	delete: destroy,
}

async function create(req, res, next) {
	const user = await User.findById(req.params.id)
	user.favorites.push(req.body)
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
