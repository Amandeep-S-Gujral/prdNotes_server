const Comment = require('../model/Comment')


//add comment into the database
let addComment = async(req, res) => {
    const body = req.body
    const data = new Comment(body.cid, body.eml, body.nam, body.pic, body.typ, body.bdy, body.lnk)

    data.setComment(data.cid)
    .then(() => res.status(200).send(data))
    .catch(e => res.status(400).send({err:e.message}))
}

//get the list of comments by passing cid
let getCommentByCid = async(req, res) => {
    const cid = req.query.cid
    let data = new Comment

    data.getCommentByCid(cid)
    .then(data => res.status(200).send(data))
    .catch(e => res.status(400).send({err:e.message}))
}

module.exports = {
    getCommentByCid,
    addComment
}