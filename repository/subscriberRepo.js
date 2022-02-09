const subscriberRepoFactory = (container) => new SubscriberRepo(container)

//-----
class SubscriberRepo{
    constructor(container){
        this.db = container.db
    }

    async addNewSubscriber(data){
            const query = this.db.collection('subscriber')
            const res = await query.add({...data})
            return {data, docId: res.id}
    }
}

module.exports = {
    subscriberRepoFactory,
    SubscriberRepo
} 