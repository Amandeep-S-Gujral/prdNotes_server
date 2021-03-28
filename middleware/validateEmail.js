//Checks for valid email address
//if email invalid, sends "invalid email"
const validator = require('validator')

const validateEmail = async(req, res, next) => {
    console.log(req.body)
    try {
        //check & validates email address
        const isValid = validator.isEmail(req.body.email)

        if (!isValid) {
            throw new Error('invalid email')
        }

        next()
    } catch (e) {
        res.status(501).send({err : e.message})
    }
}

module.exports = validateEmail