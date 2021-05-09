const ContactForm = require('../model/ContactForm')

const contactForm = async(req, res) => {
    const data = new ContactForm(req.body.email, req.body.msg)

    await data.setContactForm()
        .then(res.status(200).send({'res':'thank you'}))
        .catch(e => res.status(400).send({err: e.message}))
}

module.exports = contactForm