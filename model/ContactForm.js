const {setup, db} = require('../db')

class ContactForm {
    constructor(email, message){
        this.email = email
        this.msg = message
        this.timestamp = Date.now()
    }
    setContactForm (){
        const query =  db.collection('contactForm').doc()
        return query.create({
            email: this.email,
            msg: this.msg,
            timestamp: this.timestamp
        })
    }
}

module.exports = ContactForm