const {setup, db} = require('../db')

class Comment {
    constructor(cid, eml, nam, pic, typ, bdy, lnk){
        this.cid = cid //content id
        this.eml = eml //email
        this.nam = nam //user name
        this.pic = pic //profile pic
        this.rid = 'rid'+ Date.now()
        this.typ = typ //comment or reply
        this.bdy = bdy 
        this.lnk = lnk === null? 'rid'+Date.now() : lnk //link to which comment. If typ == comment, rid of comment itself. If typ == reply, rid of comment it is linked to.
        this.timestamp = Date.now()
    }
    
    //save comment into the comment collection of the database
    async setComment (cid){

        //query to get the documentID by passing cid
        const query1 = db.collection('content').where('cid', '==', `${cid}`)
        const snapshot = await query1.get()
        if(snapshot.empty){
            throw new Error('invalid id') 
        }
        let docId = await snapshot.docs.map(doc => doc.id).toString()

        //save the comment in the comment collection by passing 
        const query2 = db.collection('content').doc(docId).collection('detail').doc('review').collection('comment')
        return query2.add({
            cid : this.cid,
            eml : this.eml,
            nam : this.nam,
            pic : this.pic,
            rid : this.rid,
            typ : this.typ,
            bdy : this.bdy,
            lnk : this.lnk,
            timestamp : this.timestamp
        })
    }

    //get the list of comments by passing cid
    async getCommentByCid (cid){
        const query = db.collectionGroup('comment').where('cid', '==', `${cid}`)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('invalid id') 
        }
        let content = await snapshot.docs.map(doc => doc.data())
        // console.log(article)
        return content
    }
}

module.exports = Comment