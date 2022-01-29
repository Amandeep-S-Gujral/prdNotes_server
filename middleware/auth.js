// const jwt = require("jsonwebtoken")
// require('dotenv').config()

// const user = process.env.USER
// const sign = process.env.SIGN

// const auth = async (req, res, next) => {
//     try {
//         //decode encription
//         const decode = await jwt.verify(req.headers.authorization, sign)

//         if (decode.user !== user) {
//             throw new Error('unauthorized request')
//         }

//         next()

//     } catch (e) {
//         res.status(401).send({err: e.message})
//     }
// }

// module.exports = auth