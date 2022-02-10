const express = require('express')
const router = new express.Router
const validateEmail = require('../middleware/validateEmail')
const isSubscriber = require('../middleware/isSubscriber')

const {subscriberController} = require('../provider/subscriberProvider')
const {extractProjectId} = require('../middleware/extractProjectId')

router.post('/api/subscriber', [validateEmail, isSubscriber, extractProjectId], (req, res) => subscriberController.addNewSubscriber(req, res))

module.exports = router