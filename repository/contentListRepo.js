const { time } = require("faker")

//-content list repo factory
const contentListRepoFactory = (dependency) => {
    const contentLst = new ContentListRepo(dependency)
    return contentLst
}

//-----content list repository class------
class ContentListRepo {
    constructor(dependency) {
        this.db = dependency.db
    }

    //get list of contents by type
    async getContentListByType(data) {

        const query = this.db.collection('content').where('type', '==', data.type).orderBy('timestamp', 'desc')
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('content type does not exist')
        }
        const res = await snapshot.docs.map(doc => doc.data())
        return res
    }

    //get content list entry by cid
    async getEntryFromContentListByCid(data) {
        const query = this.db.collection('content').where('cid', '==', data.cid)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('Invalid cid!')
        }
        const res = await snapshot.docs.map(doc => doc.data())
        return res
    }

    //get content list length
    async getContentListLength() {
        const query = this.db.collection('content').orderBy('timestamp', 'desc').limit(1)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('No document available!')
        }
        const len = await snapshot.docs.map(doc => doc.data())[0].cid
        return { len: parseInt(len) }
    }

    //get content doc id by cid
    async getDocIdByCid(data) {
        const query = this.db.collection('content').where('cid', '==', data.cid)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('Invalid cid!')
        }
        const docId = await snapshot.docs.map(doc => doc.id).toString()
        return { docId }
    }

    //add new entry in content collection
    async addNewEntryInContentList(data) {
        const query = this.db.collection('content')
        const res = await query.add({ ...data })
        return { data: data, docId: res.id }
    }

    //update existing entry in content collection 
    async setEntryInContentList(data, docId) {
        const query = this.db.collection('content').doc(docId)
        return await query.update({ ...data })
    }
}

module.exports = {
    ContentListRepo,
    contentListRepoFactory
}