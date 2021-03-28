const Content = require('../model/Content')

//get index list of content by passing type e.g. article, book, etc.
let contentList = async (req, res) => {
    if (isNaN(req.params.typ)) {
        const data = new Content
        await data.getContentList(req.params.typ)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{ err: e.message }]))
            return
    }
    res.status(400).send([{ err: 'invalid parameters' }])
}

//get the body of the content by passing cid
let contentBody = async (req, res) => {
    if (!isNaN(req.query.cid)) {
        const data = new Content
        await data.getContentBdy(req.query.cid)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{ err: e.message }]))
            return
    }
    res.status(400).send([{ err: 'invalid parameters' }])
}

module.exports = {
    contentList,
    contentBody
}