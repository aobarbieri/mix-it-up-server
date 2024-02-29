const jwt = require('jsonwebtoken')
const { User } = require('../models')

module.exports = {
	signup,
	login,
}

async function signup(req, res, next) {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	})

	const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
	try {
		res.status(201).json({
			status: 'success',
			token,
			data: {
				user: newUser,
			},
		})
	} catch (error) {
		res.status(400).json(error)
	}
}

function login(req, res, next) {
	const { email, password } = req.body
}
