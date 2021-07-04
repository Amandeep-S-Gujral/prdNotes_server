const express = require('express')
const router = new express.Router

const {getContLst, getContBdy, addCont, setCont} = require('../controller/content')

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

router.post('/api/content', (req, res) => addCont(req, res))

router.patch('/api/content', (req, res) => setCont(req, res))



module.exports = router