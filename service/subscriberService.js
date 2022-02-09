const subscriberServiceFactory = (container) => new SubscriberService(container)

//-----
class SubscriberService {
    constructor(container) {
        this.subscriberRepo = container.subscriberRepo
    }

    async addNewSubscriber(data) {
        console.info(data)
        if (Date.now() - data.timestamp < 10000) {
            return await this.subscriberRepo().addNewSubscriber(data)
        }
        return data
    }
}

module.exports = {
    subscriberServiceFactory,
    SubscriberService
}