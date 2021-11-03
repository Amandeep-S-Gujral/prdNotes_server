//-----content controller factory function-----
const contentListControllerFactory = (obj) => {
    const controller = new ContentListController(obj)
    return controller
}

//-----content controller class-----
class ContentListController {
    constructor(dependency) {
        this.dependency = dependency
    }

    //get content list entry and content body
    async getContent(req, res) {

        //get index list of content by passing type e.g. article, book, etc.
        const data = this.dependency.contentListModel({ type: req.query.type })
        await this.dependency.contentListService().getContentListByType(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send({ err: e.message }))
        return

    }

    //add new content in content collection and content body in detail subcollection
    async addNewContent(req, res) {
        const data = this.dependency.contentListModel(req.body)
        await this.dependency.contentListService().addEntryInContentList(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send({ err: e.message }))
        return
    }

    // set content list entry
    async setContent(req, res) {
        const data = this.dependency.contentListModel(req.body)
        await this.dependency.contentListService().setEntryInContentList(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send({ err: e.message }))
        return
    }
}

module.exports = {
    ContentListController,
    contentListControllerFactory
}
