const {setup, db} = require('../db')
const contBdyModlFac = require('../model/contentBdyModel')
const contBdyRepoFac = require ('../repository/contentBdyRepo')

const contBdyServ = {

    //get content body by cid
    getContentBdyByCid (obj) {
        const data = contBdyModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contBdyRepoFac(dependency).getContentBdyByCid()
    }
}

module.exports = contBdyServ