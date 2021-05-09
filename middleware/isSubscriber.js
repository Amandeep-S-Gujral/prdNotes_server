//check for duplicate email address in subscriber collection
//if subscriber, assigns users doc to req.object
const {setup, db} = require('../db')

const isSubscriber = async(req, res, next) => {
    //query to check is email exists
    let query = db.collection('subscriber').where('email', '==', req.body.email)
    let result = {} //store results if query
    try{
         // check & assign subscriber object to result
         const snapshot = await query.get()
         const data = await snapshot.forEach(doc => result = {...doc.data() })

         //if user exist, the req body is update to stored data
         if (result.subscribe) {
            req.body = { ...result }
        }

        next()
    }catch(e){
        res.status(501).send(e.message)
    }
}

module.exports = isSubscriber