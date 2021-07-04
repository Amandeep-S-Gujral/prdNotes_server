//-content list repo factory
const contLstRepoFac = (dependency) => {
    const contentLst = new ContLstRepo(dependency)
    return contentLst
}

//-----content list repository class------
class ContLstRepo {
    constructor(dependency) {
        this.db = dependency.db
        this.data = dependency.data
        this.docId = dependency.docId
    }

    //get list of contents by type
    async getContLstByTyp() {
        const query = this.db.collection('content').where('typ', '==', this.data.typ)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('invalid content type')
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        return this.data
    }

    //get content list by cid
    async getContLstByCid() {
        const query = this.db.collection('content').where('cid', '==', this.cid)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('Invalid cid!')
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        return this.data
    }

    //get content list length
    async getContLstLen() {
        const query = this.db.collection('content').orderBy('timestamp', 'desc').limit(1)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('No document available!')
        }
        const len = await snapshot.docs.map(doc => doc.data())[0].cid
        return { len: parseInt(len) }
    }

    //get content doc id by cid
    async getContDocId() {
        const query = this.db.collection('content').where('cid', '==', this.data.cid)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('Invalid cid!')
        }
        const docId = await snapshot.docs.map(doc => doc.id).toString()
        return {docId}
    }

    //add new entry in content collection
    async addNewCont() {
        const query = this.db.collection('content')
        const res = await query.add({ ...this.data })
        return { data: this.data, docId: res.id }
    }

    //update existing entry in content collection 
    async setContLst() {
        const query = this.db.collection('content').doc(this.docId)
        const res = await query.update(JSON.parse(JSON.stringify({...this.data})))
        return res
    }
}

module.exports = contLstRepoFac