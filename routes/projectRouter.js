const express = require('express')
const router = new express.Router

const{projectController} = require('../provider/projectProvider')

router.get('/api/project', (req, res) => projectController.getProjectListByAdmin(req, res))

router.post('/api/project', (req, res) => projectController.addNewProject(req, res))

module.exports = router