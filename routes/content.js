const express = require('express')
const router = new express.Router

const {getContLst, getContBdy, addCont} = require('../controller/content')
const { setContBdy } = require('../service/contentBdyService')

router.get('/api/content', (req, res) => {
    //get content (e.g. articles, books, etc.) body
    if(req.query.typ !== undefined){
        getContLst(req, res)
        return
    }

    if(req.query.cid !== undefined){
        getContBdy(req, res)
        return
    }
})

router.post('/api/Content', (req, res) => addCont(req, res))

router.patch('/api/content', (req, res) => setContBdy(req, res))



module.exports = router