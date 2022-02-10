const express = require('express')
const router = new express.Router
const fbaseAdminAuth = require('../middleware/fbaseAdminAuth')
const { contentBodyController } = require('../provider/contentBodyProvider')
const {extractProjectId} = require('../middleware/extractProjectId')

router.get('/api/contentBody', extractProjectId, (req, res) => contentBodyController.getContentBodyByCid(req, res))

router.patch('/api/contentBody', [extractProjectId, fbaseAdminAuth], (req, res) => contentBodyController.setContentBody(req, res))

router.patch('/api/contentBody/attribute', [extractProjectId, fbaseAdminAuth], (req, res) => contentBodyController.setAttribute(req, res))

router.patch('/api/contentBody/socialAttribute', extractProjectId, (req, res) => contentBodyController.setSocialAttribute(req, res))

module.exports = router