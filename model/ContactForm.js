const { setup, db } = require('../db')

class ContactForm {
    constructor(email, msg, src) {
        this.eid = 'eid' + Date.now()
        this.email = email
        this.msg = msg
        this.src = src
        this.timestamp = Date.now()
    }

    //save user enquiry into the database
    setForm() {
        const query = db.collection('contactForm').doc()
        return query.create({
            eid: this.eid,
            email: this.email,
            msg: this.msg,
            src: this.src,
            timestamp: this.timestamp
        })
    }

    //get form data by start After time(default == now) and limit for pagination(default == 10)
    //sorted in descending order
    async getForm(startAfter, limit) {
        const query = db.collection('contactForm').orderBy('timestamp', 'desc').startAfter(startAfter).limit(limit)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('no data available')
        }
        const list = await snapshot.docs.map(doc => doc.data())
        return list
    }

    //get form data by date range. sorted in descending order
    async getFormByDate(startDate, endDate, limit) {
        const query = db.collection('contactForm').orderBy('timestamp', 'desc').startAt(startDate).endAt(endDate).limit(limit)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('invalid date range')
        }
        const list = await snapshot.docs.map(doc => doc.data())
        return list
    }

    //get form data by eid
    async getFormByEid(eid) {
        const query = db.collection('contactForm').where('eid', '==', `${eid}`)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('ivalid eid!')
        }
        const data = await snapshot.docs.map(doc => doc.data())
        return data
    }

    //get form data by email
    async getFormByEmail(email) {
        const query = db.collection('contactForm').where('email', '==', `${email}`)
        const snapshot = await query.get()
        if (snapshot.empty) {
            throw new Error('invalid email!')
        }
        const data = await snapshot.docs.map(doc => doc.data())
        return data
    }
}

module.exports = ContactForm