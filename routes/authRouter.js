const express = require('express')
const router = new express.Router
const {authController} = require('../provider/authProvider')

router.post('/api/auth/signIn', (req, res) => authController.signIn(req, res))

router.post('/api/auth/signUp', (req, res) => authController.signUp(req, res))

router.get('/api/auth/profile', (req, res) => authController.getProfile(req, res))

router.patch('/api/auth/profile', (req, res) => authController.setProfile(req, res))

module.exports = router

