///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const { User } = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// USER INDEX ACTION
async function index(req, res, next) {
	try {
		// get all users
		res.json(await User.find({}))
	} catch (error) {
		//send error
		res.status(400).json(error)
	}
}

// USER CREATE ACTION
async function create(req, res, next) {
	try {
		// create new user
		res.json(await User.create(req.body))
	} catch (error) {
		//send error
		res.status(400).json(error)
	}
}

// USER SHOW ACTION
async function show(req, res, next) {
	try {
		// send one user
		res.json(await User.findById(req.params.id))
	} catch (error) {
		//send error
		res.status(400).json(error)
	}
}

// ... the remaining USER controller actions will go below

// USER DESTROY ACTION

// USER UPDATE ACTION

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show,
}
