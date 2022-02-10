const contentListServiceFactory = (container) => new ContentListService(container)

//-----
class ContentListService {
    constructor(container) {
        this.contentListRepo = container.contentListRepo
        this.contentBodyService = container.contentBodyService
        this.contentListModel = container.contentListModel
    }

    getContentListByType(data) {
        return this.contentListRepo().getContentListByType(data)
    }

    getEntryFromContentListByCid(data) {
         const doc = this.contentListRepo().getContentListEntryByCid(data)
         if(doc.projectId === data.projectId) return doc
         return{err:'invalid request!'}
    }

    getContentListLength() {
        return this.contentListRepo().getContentListLength()
    }

    getDocIdByCid(data) {
        return this.contentListRepo().getDocIdByCid(data)
    }

    async addEntryInContentList(data) {

        let docId = ''

        //get length of content collection and set cid = len + 1
        await this.getContentListLength()
            .then(obj => data.cid = String(obj.len + 1))
            .then(() => data.url = 'https://www.prdnotes.com/'+data.type+'/'+data.cid)
            .catch(e => { throw new Error(e) })

        //add content to the content collection
        await this.contentListRepo().addNewEntryInContentList(data)
            .then(obj => docId = obj.docId) //assign object to data
            .catch(e => { throw new Error(e) })

        //add content bdy to the detail sub-collection
        await this.contentBodyService().addNewContentBody(data, docId)
            .then(obj => obj)
            .catch(e => { throw new Error(e.message) })

        return data
    }

    async setEntryInContentList(data) {
        let d = this.contentListModel(data)
        let docId = ''
        //get content docId by cid
        await this.getDocIdByCid(d)
            .then(obj => docId = obj.docId)
            .catch(e => { throw new Error(e.message) })
            
        return this.contentListRepo().setEntryInContentList(d, docId)
    }
}


module.exports = {
    ContentListService,
    contentListServiceFactory
}