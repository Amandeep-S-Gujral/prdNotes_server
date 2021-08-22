const contentBodyServiceFactory = (obj) => {
    const contentService = new ContentBodyService(obj)
    return contentService
}
//-----content body service class-----
class ContentBodyService {
    constructor(obj) {
        this.contentBodyModel = obj.contentBodyModel
        this.contentBodyRepo = obj.contentBodyRepo
        this.contentListService = obj.contentListService
        this.admin = obj.admin
    }

    //get content body by cid
    getContentBodyByCid(data) {
        return this.contentBodyRepo().getContentBodyByCid(data)
    }

    //add new content body in the detail collection
    addNewContentBody(data, docId) {
        const d = this.contentBodyModel(data)
        return this.contentBodyRepo().addNewContentBody(d, docId)
    }

    //update content body
    async setContentBody(data) {
        let docId = ''
        await this.contentListService().getDocIdByCid(data)
            .then(obj => docId = obj.docId)
            .catch(e => { throw new Error(e.message) })

        return this.contentBodyRepo().setContentBody(data, docId)
    }

    //update content attributes like "post"
    async setContentBodyAttribute(data) {

        //update attribute (e.g. post) in detail sub-collection
        await this.setContentBody(data)
            .then(obj => obj)
            .catch(e => { throw new Error(e.message) })

        //update attribute in content collection
        await this.contentListService().setEntryInContentList(data)
            .then(obj => obj)
            .catch(e => { throw new Error(e.message) })

        return [{ msg: 'updated' }]
    }

    //update social attributes e.g. like, share, etc
    async setSocialAttributeCount(data, attributeName) {
        data[attributeName] = this.admin.firestore.FieldValue.increment(1)

        this.setContentBodyAttribute(data)
            .then(obj => obj )
            .catch(e => { throw new Error(e.message) })

        return [{msg: 'updated'}]

    }
}

module.exports = {
    ContentBodyService,
    contentBodyServiceFactory
}