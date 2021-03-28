const {setup, db} = require('../db')

class Subscriber {
    constructor(email){
        this.email = email
        this.subscribe = true
        this.timestamp = Date.now()
    }
    setSubscriber (){
        const query = db.collection('subscriber').doc()
        return query.create({
            email: this.email,
            subscribe: this.subscribe,
            timestamp: this.timestamp
        })
    }
}

module.exports = Subscriber