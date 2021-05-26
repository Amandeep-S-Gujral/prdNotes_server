const {setup, db} = require('../db')

class Subscriber {
    constructor(email, src){
        this.sid = 'sid' + Date.now()
        this.email = email
        this.src = src
        this.subscribe = true
        this.timestamp = Date.now()
    }
    setSubscriber (){
        const query = db.collection('subscriber').doc()
        return query.create({
            sid: this.sid,
            email: this.email,
            src: this.src,
            subscribe: this.subscribe,
            timestamp: this.timestamp
        })
    }
}

module.exports = Subscriber