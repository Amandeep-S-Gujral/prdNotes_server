const express = require('express')
const router = new express.Router

const validateEmail = require('../middleware/validateEmail')
const isSubscriber = require('../middleware/isSubscriber')
const auth = require('../middleware/auth')

const Subscriber = require('../model/Subscriber')
const e = require('express')

router.post('/api/subscriber', [auth, validateEmail, isSubscriber], (req, res) => {

    //create document in the firestore in subscriber collection if user doesnot exist
    if (req.body.timestamp === undefined) {

        const data = new Subscriber(req.body.email)
        data.setSubscriber()
            .then(() => res.status(200).send({res:'thank you'}))
            .catch(e => res.status(400).send({err: e.message}))
        return
    }

    res.send({ 'res': 'thank you' })
})

module.exports = router