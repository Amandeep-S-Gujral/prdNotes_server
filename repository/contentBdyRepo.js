const contentBdyRepoFactory = (dependency) => {
    const contentBdy = new ContentBdy(dependency)
    return contentBdy
}

class contentbdy{
    constructor(dependency){
        this.db = dependency.db
        this.data = dependency.data
    }

    //get content body by cid
    async getContentBdy() {
        const query = this.db.collectionGroup('detail').where('cid', '==', `${this.data.cid}`)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid content id') 
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        // console.log(article)
        return content
    }
}