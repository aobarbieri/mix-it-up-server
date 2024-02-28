const createError = require('http-errors')
const express = require('express')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')

require('dotenv').config()
require('./config/db.connection.js')
const { PORT } = process.env
require('./config/passport')

const userRouter = require('./routes/users')
const favoriteRouter = require('./routes/favorites')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(morgan('dev'))
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
	})
)
app.use(passport.initialize())
app.use(passport.session())
app.use(function (req, res, next) {
	res.locals.user = req.user
	next()
})

app.use('/user', userRouter)
app.use('/', favoriteRouter)

// test route
app.get('/', (req, res) => {
	res.send('Server is running!')
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))

module.exports = app
