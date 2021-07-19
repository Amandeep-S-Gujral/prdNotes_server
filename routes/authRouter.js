const express = require('express')
const router = new express.Router
const {authController} = require('../provider/authProvider')

router.get('/api/auth/profile', (req, res) => authController.getProfile(req, res))

router.post('/api/auth/addUser', (req, res) => authController.addUser(req, res))

router.patch('/api/auth/profile', (req, res) => authController.setProfile(req, res))

router.patch('/api/auth/customClaim', (req, res) => authController.setCustomClaim(req, res))

module.exports = router

