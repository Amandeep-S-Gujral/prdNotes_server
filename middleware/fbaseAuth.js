const { setup, auth } = require('../db')

const fbaseAuth = async (req, res, next) => {
    try {
        const user = await auth.verifyIdToken(req.headers.authorization)
        if (user === null) {
            throw new Error('unauthorized request')
        }
        
        res.body = Object.assign(req.body, {nam: user.name, pic: user.picture, eml: user.email})
        
        console.log(req.body)
        next()

    } catch (e) {
        res.status(401).send({ err: e })
    }
}

module.exports = fbaseAuth