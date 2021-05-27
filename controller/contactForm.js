const ContactForm = require('../model/ContactForm')
const validator = require('validator')
require('dotenv').config()

//'|0' is added to convert string to integer
const pagLimit = process.env.PAGLIMIT | 0 //default pagination limit 
const dayGap = process.env.DAYGAP | 0

const setForm = async (req, res) => {
    const data = new ContactForm(req.body.email, req.body.msg, 'contactForm')

    await data.setForm()
        .then(res.status(200).send({ 'res': 'thank you' }))
        .catch(e => res.status(400).send({ err: e.message }))
}

//get form data based on the query params send via HTTP
const getForm = async (req, res) => {

    const key = req.query.key || null //null is default value
    const limit = parseInt(req.query.limit) || pagLimit //pagLimit is default value set in dot env file
    const startDate = parseInt(req.query.startDate) || Date.now() - dayGap
    const endDate = parseInt(req.query.endDate) || Date.now()
    const src = req.query.src || null

    const data = new ContactForm()

    //check if key is null, then send formData list
    if (key === null && src === null) {
        await data.getFormByDate(startDate, endDate, limit)
            .then(data => res.status(200).send(data))
            .catch(e => [{ err: e.message }])
        return
    }

    //check is src is not null, then send form data 
    if (src !== null) {
        console.log(endDate, src, limit)
        await data.getFormBySrc(endDate, src, limit)
            .then(data => res.status(200).send(data))
            .catch(e => [{ err: e.message }])
        return
    }

    //check if key is a valid eid, then send formData
    if (key.includes('eid')) {
        await data.getFormByEid(key)
            .then(data => res.status(200).send(data))
            .catch(e => [{ err: e.message }])
        return
    }

    //check if key is a valid email, then send formData
    if (validator.isEmail(key)) {
        await data.getFormByEmail(key)
            .then(data => res.status(200).send(data))
            .catch(e => [{ err: e.message }])
        return
    }
}


module.exports = {
    setForm,
    getForm
}