///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')

require('dotenv').config()
require('./config/db.connection.js')
require('./config/passport')
// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT } = process.env

const usersRouter = require('./routes/users')

// create application object
const app = express()

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // parse json bodies - this will run before our request accesses the users router
app.use(cors()) // to minimize cors errors, open access to all origins
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev')) // logging for development
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
)
app.use(passport.initialize())
app.use(passport.session())

// all requests for endpoints that begin with '/users'
app.use('/users', usersRouter)

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get('/', (req, res) => {
	res.send('Server is running!')
})

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
