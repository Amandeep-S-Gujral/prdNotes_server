const express = require('express')
const router = new express.Router
const {contentListController} = require('../provider/contentListProvider')

router.get('/api/contentList', (req, res) => contentListController.getContent(req, res))

router.post('/api/contentList', (req, res) => contentListController.addNewContent(req, res))

router.patch('/api/contentList', (req, res) => contentListController.setContent(req, res))

module.exports = router