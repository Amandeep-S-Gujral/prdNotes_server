//-----content lst service factory-----
const contentListServiceFactory = (dependency) => {
    const service = new ContentListService(dependency)
    return service
}

//-----content list service class-----
class ContentListService {
    constructor(obj) {
        this.contentListRepo = obj.contentListRepo
        this.contentBodyService = obj.contentBodyService
        this.contentBodyModel = obj.contentBodyModel
    }

    //get content list by type
    getContentListByType(data) {
        return this.contentListRepo().getContentListByType(data)
    }

    //get content list by cid
    getEntryFromContentListByCid(data) {
        return this.contentListRepo().getContentListEntryByCid(data)
    }

    //get content list length
    getContentListLength() {
        return this.contentListRepo().getContentListLength()
    }

    //get content doc id by cid
    getDocIdByCid(data) {
        return this.contentListRepo().getDocIdByCid(data)
    }

    //add to content list
    async addEntryInContentList(data) {

        let docId = ''

        //get length of content collection and set cid = len + 1
        await this.getContentListLength()
            .then(obj => data.cid = String(obj.len + 1))
            .then(() => data.url = 'https://www.prdnotes.com/'+data.typ+'/'+data.cid)
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

    //update existing entry in content collection
    async setEntryInContentList(data) {
        let docId = ''
        //get content docId by cid
        await this.getDocIdByCid(data)
            .then(obj => docId = obj.docId)
            .catch(e => { throw new Error(e.message) })
            
        return this.contentListRepo().setEntryInContentList(data, docId)
    }
}


module.exports = {
    ContentListService,
    contentListServiceFactory
}