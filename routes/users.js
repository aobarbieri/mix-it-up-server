const express = require('express')
const userCtrl = require('../controllers/users')
const authCtrl = require('../controllers/auth')

const router = express.Router()

router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

router.get('/', userCtrl.index)
router.post('/', userCtrl.create)
router.get('/:id', userCtrl.show)
router.delete('/:id', userCtrl.delete)
router.put('/:id', userCtrl.update)

module.exports = router

//######### Google OAuth - not in use #########
// const passport = require('passport')
// router.get(
// 	'/auth/google',
// 	passport.authenticate('google', {
// 		scope: ['profile', 'email'],
// 	})
// )
// router.get(
// 	'/oauth2callback',
// 	passport.authenticate('google', {
// 		successRedirect: '/user',
// 		failureRedirect: '/',
// 	})
// )
// router.get('/logout', function (req, res) {
// 	req.logout(function () {
// 		res.redirect('/')
// 	})
// })
