const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
// const auth = require('../middleware/auth')

const {setForm} = require('../controller/contactForm')

router.post('/api/contactForm', validateEmail, (req, res) => setForm(req, res))

module.exports = router