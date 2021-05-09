const { setup, db } = require('../db')

class Content {
    constructor(id, tle, img, url, cat, des, typ) {
        this.id = id;
        this.tle = tle;
        this.img = img;
        this.url = url;
        this.cat = cat;
        this.des = des;
        this.typ = typ
    }
    //method to get list of contents by type
    async getContentList(typ) {
        const query = db.collection('content').where('typ', '==', `${typ}`)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid content type')
        }
        let list = await snapshot.docs.map(doc => doc.data())
        return list
    }
    //method to get the content body by content id(cid)
    async getContentBdy(cid) {
        const query = db.collectionGroup('detail').where('cid', '==', `${cid}`)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid content id') 
        }
        let content = await snapshot.docs.map(doc => doc.data())
        // console.log(article)
        return content
    }
}

module.exports = Content