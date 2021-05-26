const Subscriber = require('../model/Subscriber')

const subscriber = async(req, res) => {

     //create document in the firestore in subscriber collection if user doesnot exist i.e. timestamp is undefined
     if (req.body.timestamp === undefined) {

        const data = new Subscriber(req.body.email, 'homePage')
        await data.setSubscriber()
            .then(() => res.status(200).send({res:'thank you'}))
            .catch(e => res.status(400).send({err: e.message}))
        return
    }

    res.send({ 'res': 'thank you' })
}

module.exports = subscriber