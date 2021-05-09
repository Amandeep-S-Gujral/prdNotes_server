const { setup, db } = require('../db')

class AdminDoc {
    constructor(nam) {
        this.nam = nam //document name e.g. privacy-policy
    }

    //get document bu document name
    async getDocByNam(nam) {
        const query = db.collection('adminDocs').where('nam', '==', `${nam}`)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('invalid document name')
        }
        let doc = await snapshot.docs.map(doc => doc.data())
        return doc
    }
}

module.exports = AdminDoc