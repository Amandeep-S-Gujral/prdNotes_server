const express = require('express')
const router = new express.Router
const validateEmail = require('../middleware/validateEmail')
const isSubscriber = require('../middleware/isSubscriber')

const {subscriberController} = require('../provider/subscriberProvider')

router.post('/api/subscriber', [validateEmail, isSubscriber], (req, res) => subscriberController.addNewSubscriber(req, res))

module.exports = router