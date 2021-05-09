const express = require('express')
const router = new express.Router

const {getAdminDocByNam} = require('../controller/adminDoc')

router.get('/api/adminDoc/:docNam', (req, res) => getAdminDocByNam(req, res))

module.exports = router