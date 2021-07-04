const { setup, db } = require('../db')
const { contLstModlFac } = require('../model/contLstModl')
const contLstRepoFac = require('../repository/contLstRepo')
const contBdyServ = require('./contBdyServ')

const contLstServ = {

    //get content list by type
    getContLstByTyp(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contLstRepoFac(dependency).getContLstByTyp()
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
        return contLstRepoFac(dependency).getContLstLen()
    },

    //get content doc id by cid
    getContDocId(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }

        return contLstRepoFac(dependency).getContDocId()
    },

    //add to content list
    async addNewCont(obj) {
        let data = contLstModlFac(obj)
        await this.getContLstLen()
            .then(obj => data.cid = obj.len + 1)
            .catch(e => e)

        const dependency = {
            db, data
        }

        //add content to the content collection
        await contLstRepoFac(dependency).addNewCont()
            .then(obj => data = obj)
            .catch(e => e)

        //add content bdy to the detail sub-collection
        await contBdyServ.addNewContBdy(data)
            .then(obj => obj)
            .catch(e => e)

        return data.data
    },

    //update existing entry in content collection
    async setContLst(obj) {
        const data = contLstModlFac(obj)
        const dependency = {
            db,
            data
        }

        //get content docId by cid
        await this.getContDocId(obj)
            .then(obj => dependency.docId = obj.docId)
            .catch(e => e)

        return contLstRepoFac(dependency).setContLst()
    }
}


module.exports = contLstServ