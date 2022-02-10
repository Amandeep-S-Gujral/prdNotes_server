const express = require('express')
const router = new express.Router
const fbaseAdminAuth = require('../middleware/fbaseAdminAuth')
const {contentListController} = require('../provider/contentListProvider')
const {extractProjectId} = require('../middleware/extractProjectId')

router.get('/api/contentList', extractProjectId, (req, res) => contentListController.getContent(req, res))

router.post('/api/contentList', [extractProjectId, fbaseAdminAuth], (req, res) => contentListController.addNewContent(req, res))

router.patch('/api/contentList', [extractProjectId, fbaseAdminAuth], (req, res) => contentListController.setContent(req, res))

module.exports = router