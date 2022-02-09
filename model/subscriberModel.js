const subscriberModelFactory = (container) => new SubscriberModel(container)

//-----
class SubscriberModel {
    constructor(container){
        this.sid = container.sid === undefined ? 'sid' + Date.now() : container.sid
        this.timestamp = container.timestamp === undefined ? Date.now() : container.timestamp
        this.email = container.email
        this.source = container.source
        this.subscribe = true
        this.projectId = container.projectId
    }
}

module.exports = {
    subscriberModelFactory,
    SubscriberModel
}