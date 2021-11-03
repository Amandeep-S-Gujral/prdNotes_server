const { auth } = require('../db')

const fbaseAdminAuth = async (req, res, next) => {
    try {
        const user = await auth.verifyIdToken(req.headers.authorization)
        if (user === null) {
            throw new Error('unauthorized request')
        }
        const claim = user.admin
        if (!claim) {
            throw new Error('unauthorized access')
        }
        res.body = Object.assign(req.body, {nam: user.name, pic: user.picture, eml: user.email})
        
        next()

    } catch (e) {
        res.status(401).send({ err: e.message })
    }
}

module.exports = fbaseAdminAuth