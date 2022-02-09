const subscriberControllerFactory = (container) => new SubscriberController(container)

//-----
class SubscriberController {
    constructor(container) {
        this.subscriberModel = container.subscriberModel
        this.subscriberService = container.subscriberService
    }

    async addNewSubscriber(req, res) {
        const data = this.subscriberModel(req.body)
        await this.subscriberService().addNewSubscriber(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send({err:e.message}))
        return
    }


}

module.exports = {
    subscriberControllerFactory,
    SubscriberController
}