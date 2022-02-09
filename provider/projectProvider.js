const{projectRepoFactory} = require('../repository/projectRepo')
const {projectModelFactory} = require('../model/projectModel')
const {projectServiceFactory} = require('../service/projectService')
const {projectControllerFactory} = require('../controller/projectController')
const {db} = require('../db')
const Dic = require('../container')

const dic = new Dic()

dic.setFactory('projectRepo', projectRepoFactory)
dic.setFactory('projectService', projectServiceFactory)
dic.setModel('projectModel', projectModelFactory)
dic.setModule('db', db)

const projectController = projectControllerFactory(dic.getContainer())

module.exports = {
    projectController
}
