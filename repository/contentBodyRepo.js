const contentBodyRepoFactory = (dependency) => {
    const contentBody = new ContentBodyRepo(dependency)
    return contentBody
}

class ContentBodyRepo{
    constructor(dependency){
        this.db = dependency.db
    }

    //get content body by cid
    async getContentBodyByCid(data) {
        const query = this.db.collectionGroup('detail').where('cid', '==', data.cid)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid cid!') 
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        return this.data
    }

    //add new content body
    async addNewContentBody(data, docId) {
        const query = this.db.collection('content').doc(docId).collection('detail').doc('body')
        await query.set({...data})
        return data
    }

    //update content body
    async setContentBody(data, docId){
        const query = this.db.collection('content').doc(docId).collection('detail').doc('body')
        return await query.update({...data})
    }
}

module.exports = {
    contentBodyRepoFactory
}