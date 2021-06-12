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

    //get content list length
    async getContentLstLen(){
        const query = this.db.collection('content').orderBy('timestamp', 'desc').limit(1)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('No document available!')
        }
        const len = await snapshot.docs.map(doc => doc.data())[0].cid
        return {len: parseInt(len)}
    }

     //set new content in content list
     async addNewContent(){
        const query = this.db.collection('content')
        await query.add({...this.data})
        return this.data
    }
}

module.exports = contLstRepoFac