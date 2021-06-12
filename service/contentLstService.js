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

    //get content list length
    getContentLstLen() {
        const dependency = {
            db
        }
        return contLstRepoFac(dependency).getContentLstLen()
    },

    //add to content list
    async addNewContent(obj) {
        const data = contLstModlFac(obj)
        await this.getContentLstLen()
            .then(len => data.cid = len.len + 1)
            .catch(e => e)

        const dependency = {
            db, data
        }
        return contLstRepoFac(dependency).addNewContent()
    }
}


module.exports = contLstServ