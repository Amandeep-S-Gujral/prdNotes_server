const express = require('express')
const router = new express.Router

const {addComment, getCommentByCid} = require('../controller/comment')
const fbaseAuth = require('../middleware/fbaseAuth')

router.post('/api/comment', fbaseAuth, (req, res) => {
    addComment(req, res)
})

router.get('/api/comment', (req, res) => {
    getCommentByCid(req, res)
})

module.exports = router