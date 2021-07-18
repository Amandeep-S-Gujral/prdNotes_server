const {contentBodyServiceFactory} = require('../service/contentBodyService')
const {contentBodyRepoFactory} = require('../repository/contentBodyRepo')
const {contentBodyModelFactory} = require('../model/contentBodyModel')
const {contentBodyControllerFactory} = require('../controller/contentBodyController')
const {contentListServiceFactory} = require('../service/contentListService')
const {contentListRepoFactory} = require('../repository/contentListRepo')
const {contentListModelFactory} = require('../model/contentListModel')
const {admin, db} = require('../db')
const Dic = require('../container')

const dic = new Dic()

dic.setFactory('contentBodyService', contentBodyServiceFactory)
dic.setFactory('contentBodyRepo', contentBodyRepoFactory)
dic.setModel('contentBodyModel', contentBodyModelFactory)
dic.setFactory('contentListService', contentListServiceFactory)
dic.setFactory('contentListRepo', contentListRepoFactory)
dic.setModel('contentListModelFactory', contentListModelFactory)
dic.setModule('admin', admin)
dic.setModule('db', db)

const contentBodyController = contentBodyControllerFactory(dic.getContainer())

module.exports = {
    contentBodyController
}