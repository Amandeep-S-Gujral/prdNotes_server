//-----content body controller factory
const contentBodyControllerFactory = (dependency) => {
    const controller = new ContentBodyController(dependency)
    return controller
}

//-----content body controller class-----
class ContentBodyController{
    constructor(dependency){
        this.dependency = dependency
    }

    async getContentBodyByCid(req, res) {
        const data = this.dependency.contentBodyModel({cid: req.query.cid})
        await this.dependency.contentBodyService().getContentBodyByCid(data)        
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{err: e.message}]))
    }

    async setContentBody(req, res) {
        const data = this.dependency.contentBodyModel(req.body)
        await this.dependency.contentBodyService().setContentBody(data)
            .then(data => res.status(200).send(data))
            .catch(e => [{err: e.message}])
    }

    async setSocialAttribute(req, res){
        const data = this.dependency.contentBodyModel(req.body)
        const attributeName = req.query.attributeName
        await this.dependency.contentBodyService().setSocialAttributeCount(data, attributeName)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{err: e.message}]))
    }
}

module.exports = {
    ContentBodyController,
    contentBodyControllerFactory
}