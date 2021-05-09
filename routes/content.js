const express = require('express')
const router = new express.Router

const {contentList, contentBody} = require('../controller/content')

router.get('/api/content/:typ', (req, res) => {
    //get content (e.g. articles, books, etc.) body
    if (!isNaN(req.query.cid)) {
        contentBody(req, res)
        return
    }
    
    //get list of contents(e.g. articles, books, etc.)
    contentList(req, res)
})


module.exports = router