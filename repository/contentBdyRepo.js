const contBdyRepoFac = (dependency) => {
    const contentBdy = new ContentBdy(dependency)
    return contentBdy
}

class ContentBdy{
    constructor(dependency){
        this.db = dependency.db
        this.data = dependency.data
    }

    //get content body by cid
    async getContentBdyByCid() {
        const query = this.db.collectionGroup('detail').where('cid', '==', this.data.cid)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid content id') 
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        return this.data
    }

    //add content body
}

module.exports = contBdyRepoFac