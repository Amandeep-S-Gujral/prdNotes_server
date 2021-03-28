const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
const auth = require('../middleware/auth')

const ContactForm = require('../model/ContactForm')

router.post('/api/contactForm', [auth, validateEmail], async (req, res) => {

    const data = new ContactForm(req.body.email, req.body.msg)

    data.setContactForm()
        .then(res.status(200).send({'res':'thank you'}))
        .catch(e => res.status(400).send({err: e.message}))
})

module.exports = router