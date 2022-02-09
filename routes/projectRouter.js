const express = require('express')
const router = new express.Router

const{projectController} = require('../provider/projectProvider')
const extractProjectId = require('../middleware/extractProjectId')
 
router.post('/api/project', extractProjectId, (req, res) => projectController.addNewProject(req, res))

module.exports = router