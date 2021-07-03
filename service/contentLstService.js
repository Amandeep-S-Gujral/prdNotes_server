const { setup, db } = require('../db')
const contLstModlFac = require('../model/contentLstModel')
const contLstRepoFac = require('../repository/contentLstRepo')
const contBdyServ = require('./contentBdyService')

const contLstServ = {

    //get content list by type
    getContLstByTyp(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac(dependency).getContentListByType()
    },

    //get content list by cid
    getContLstByCid(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac(dependency).getContLstByCid()
    },

    //get content list length
    getContLstLen() {
        const dependency = {
            db,
        }
        return contLstRepoFac(dependency).getContentLstLen()
    },

    //get content doc id by cid
    getContDocId(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac(dependency).getContentDocId()
    },

    //add to content list
    async addNewContent(obj) {
        let data = contLstModlFac(obj)
        await this.getContLstLen()
            .then(len => data.cid = len.len + 1)
            .catch(e => e)

        const dependency = {
            db, data
        }

        //add content to the content collection
        await contLstRepoFac(dependency).addNewContent()
            .then(obj => data = obj)
            .catch(e => e)

        //add content bdy to the detail sub-collection
        await contBdyServ.addNewContBdy(data)
            .then(obj => console.log(obj))
            .catch(e => e)

        return data
    },

    //update existing entry in content collection
    setContLst(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac.setContLst(dependency)
    }
}


module.exports = contLstServ