const { setup, db } = require('../db')
const contBdyModlFac = require('../model/contentBdyModel')
const contBdyRepoFac = require('../repository/contentBdyRepo')
const contLstServ = require('./contentLstService')

const contBdyServ = {

    //get content body by cid
    getContBdyByCid(obj) {
        const data = contBdyModlFac(obj)
        const dependency = {
            db,
            data
        }
        return contBdyRepoFac(dependency).getContentBdyByCid()
    },

    //add new content body in the detail collection
    addNewContBdy(obj) {
        const data = contBdyModlFac(obj.data)
        const dependency = {
            db,
            data,
            docId: obj.docId
        }

        return contBdyRepoFac(dependency).addContentBdy()
    },

    //update content body
    async setContBdy(obj) {
        const data = contBdyModlFac(obj)
        const dependency = {
            db,
            data,
            docId
        }
        
        await contLstServ.getContentDocId(obj)
            .then(res => dependency.docId = res)
            .catch(e => e)

        return contBdyRepoFac(dependency).addContentBdy()
    }

}

module.exports = contBdyServ