const {subscriberServiceFactory} = require('../service/subscriberService')
const {subscriberRepoFactory} = require('../repository/subscriberRepo')
const {subscriberModelFactory} = require('../model/subscriberModel')
const {subscriberControllerFactory} = require('../controller/subscriberController')
const {db} = require('../db')
const Dic = require('../container')

const dic = new Dic()
dic.setFactory('subscriberService', subscriberServiceFactory)
dic.setFactory('subscriberRepo', subscriberRepoFactory)
dic.setModel('subscriberModel', subscriberModelFactory)
dic.setModule('db', db)

const subscriberController = subscriberControllerFactory(dic.getContainer())

module.exports={
    subscriberController
}


