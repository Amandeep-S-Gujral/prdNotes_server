const { setup, db } = require('../db')
const contLstModlFac = require('../model/contentLstModel')
const contLstRepoFac = require('../repository/contentLstRepo')

const contLstServ = {

    //get content list by type
    getContentLst(obj) {
        console.log(obj)
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac(dependency).getContentListByType()
    },

    //add to content list
    addToContentlst (obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db, data
        }


    }
}


module.exports = contLstServ