const { User } = require('../models')

module.exports = {
	signup,
}

async function signup(req, res, next) {
	const newUser = await User.create(req.body)
	try {
		res.status(201).json({
			status: 'success',
			data: {
				user: newUser,
			},
		})
	} catch (error) {
		res.status(400).json(error)
	}
}
