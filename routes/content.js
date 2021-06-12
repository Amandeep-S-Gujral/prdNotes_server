const express = require('express')
const router = new express.Router

const {getContentList, getContentBody, addContentToList} = require('../controller/content')

router.get('/api/content/:typ', (req, res) => {
    //get content (e.g. articles, books, etc.) body
    if (!isNaN(req.query.cid)) {
        getContentBody(req, res)
        return
    }
    
    //get list of contents(e.g. articles, books, etc.)
    getContentList(req, res)
})

router.post('/api/addContent', (req, res) => addContentToList(req, res))


module.exports = router