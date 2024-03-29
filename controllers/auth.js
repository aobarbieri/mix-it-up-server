const jwt = require('jsonwebtoken')
const AppError = require('./../utils/appError')
const { User } = require('../models')

function signToken(id) {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN })
}

module.exports = {
	signup,
	login,
	protect,
}

async function signup(req, res, next) {
	const newUser = await User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		passwordConfirm: req.body.passwordConfirm,
	})

	const token = signToken(newUser._id)
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

async function login(req, res, next) {
	const { email, password } = req.body

	// Check if email and password exist
	if (!email || !password) {
		return next(new AppError('Please provide email and password', 400))
	}

	// Check if user exists && password is correct
	const user = await User.findOne({ email }).select('+password')
	if (!user || !(await user.correctPassword(password, user.password))) {
		return next(new AppError('Incorrect email or password', 401))
	}

	// If everything is ok, send token to client
	const token = signToken(user._id)
	res.status(200).json({
		status: 'success',
		token,
	})
}

async function protect(req, res, next) {
	// Getting token and check of it's there
	let token
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1]
	}
	console.log(token)
	if (!token) {
		return next(new AppError('You are not logged in! Please log in to get access.', 401))
	}
	// Verification token

	// Check if user still exists

	// Check if user changed password after the token was issued
	next()
}
