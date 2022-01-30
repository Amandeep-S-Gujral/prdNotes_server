const {contentListServiceFactory} = require('../service/contentListService')
const {contentListRepoFactory} = require('../repository/contentListRepo')
const {contentListModelFactory} = require('../model/contentListModel')
const {contentListControllerFactory} = require('../controller/contentListController')
const {contentBodyServiceFactory} = require('../service/contentBodyService')
const {contentBodyRepoFactory} = require('../repository/contentBodyRepo')
const {contentBodyModelFactory} = require('../model/contentBodyModel')
const {db} = require('../db')
const Dic = require('../container')

const dic = new Dic()
dic.setFactory('contentListService', contentListServiceFactory)
dic.setFactory('contentListRepo', contentListRepoFactory)
dic.setModel('contentListModel', contentListModelFactory)
dic.setFactory('contentBodyService', contentBodyServiceFactory)
dic.setFactory('contentBodyRepo', contentBodyRepoFactory)
dic.setModel('contentBodyModel', contentBodyModelFactory)
dic.setModule('db', db)

const contentListController = contentListControllerFactory(dic.getContainer())

module.exports = {contentListController}