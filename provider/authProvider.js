const {authServiceFactory} = require('../service/authService')
const {authRepoFactory} = require('../repository/authRepo')
const {userModelFactory} = require('../model/userModel')
const {authControllerFactory} = require('../controller/authController')
const {auth} = require('../db')
const Dic = require('../container')

const dic = new Dic()

dic.setFactory('authService', authServiceFactory)
dic.setFactory('authRepo', authRepoFactory)
dic.setModel('userModel', userModelFactory)
dic.setModule('auth', auth)

const authController = authControllerFactory(dic.getContainer())

module.exports = {
    authController
}