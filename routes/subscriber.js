const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
const isSubscriber = require('../middleware/isSubscriber')
const auth = require('../middleware/auth')

const subscriber = require('../controller/subscriber')

router.post('/api/subscriber', [auth, validateEmail, isSubscriber], (req, res) => subscriber(req, res))

module.exports = router