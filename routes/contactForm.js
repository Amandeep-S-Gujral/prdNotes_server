const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
const auth = require('../middleware/auth')

const contactForm = require('../controller/contactForm')

router.post('/api/contactForm', [auth, validateEmail], (req, res) => contactForm(req, res))

module.exports = router