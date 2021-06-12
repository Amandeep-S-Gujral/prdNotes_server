const contLstRepoFac = (dependency) => {
    const contentLst = new ContentLst(dependency)
    return contentLst
}

//-----content list repository class------
class ContentLst {
    constructor(dependencies) {
        this.db = dependencies.db
        this.data = dependencies.data
    }

    //method to get list of contents by type
    async getContentListByType() {
        const query = this.db.collection('content').where('typ', '==', this.data.typ)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('invalid content type')
        }
        this.data = await snapshot.docs.map(doc => doc.data())
        return this.data
    }

     //set new content in content list
     async addContent(){
        const query1 = this.db.collection('content').orderBy('timestamp', 'desc').limit(1)
        const snapshot = await query1.get()
        if(snapshot.empty){
            throw new Error('no document available')
        }
        this.data.cid = await snapshot.docs.map(doc => doc.cid)

        const query2 = db.collection('content')
        await query2.add(this.data)
        return this.data
    }
}

module.exports = contLstRepoFac