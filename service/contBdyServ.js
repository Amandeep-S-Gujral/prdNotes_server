const { setup, db } = require('../db')
const {contBdyModlFac} = require('../model/contBdyModl')
const contBdyRepoFac = require('../repository/contBdyRepo')
const contLstServ = require('./contLstServ')

const contBdyServ = {

    //get content body by cid
    getContBdyByCid(obj) {
        const data = contBdyModlFac(obj)
        console.log(data)
        const dependency = {
            db,
            data
        }
        return contBdyRepoFac(dependency).getContBdyByCid()
    },

    //add new content body in the detail collection
    addNewContBdy(obj) {
        const data = contBdyModlFac(obj.data)
        const dependency = {
            db,
            data,
            docId: obj.docId
        }

        return contBdyRepoFac(dependency).addContBdy()
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