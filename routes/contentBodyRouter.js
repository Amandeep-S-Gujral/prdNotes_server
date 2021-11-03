const express = require('express')
const router = new express.Router
const fbaseAdminAuth = require('../middleware/fbaseAdminAuth')
const { contentBodyController } = require('../provider/contentBodyProvider')

router.get('/api/contentBody', (req, res) => contentBodyController.getContentBodyByCid(req, res))

router.patch('/api/contentBody', fbaseAdminAuth, (req, res) => contentBodyController.setContentBody(req, res))

router.patch('/api/contentBody/attribute', fbaseAdminAuth, (req, res) => contentBodyController.setAttribute(req, res))

router.patch('/api/contentBody/socialAttribute', (req, res) => contentBodyController.setSocialAttribute(req, res))

module.exports = router