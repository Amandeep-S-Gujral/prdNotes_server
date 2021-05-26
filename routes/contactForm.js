const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
const auth = require('../middleware/auth')

const {setForm, getForm} = require('../controller/contactForm')

router.post('/api/contactForm', [auth, validateEmail], (req, res) => setForm(req, res))

router.get('/api/contactForm/', (req,res) => getForm(req,res))

module.exports = router