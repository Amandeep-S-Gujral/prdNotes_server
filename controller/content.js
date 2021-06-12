const contLstServ = require('../service/contentLstService')
const contBdyServ = require('../service/contentBdyService')

//get index list of content by passing type e.g. article, book, etc.
let getContentList = async (req, res) => {
    
    console.log(req.params.typ)
    if (isNaN(req.params.typ)) {
        const data = {typ: req.params.typ}
        console.log(data)
        await contLstServ.getContentLst(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{ err: e.message }]))
            return
    }
    res.status(400).send([{ err: 'invalid parameters' }])
}

//get the body of the content by passing cid
let getContentBody = async (req, res) => {
    if (!isNaN(req.query.cid)) {
        const data = {cid: req.query.cid}
        await contBdyServ.getContentBdyByCid(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{ err: e.message }]))
            return
    }
    res.status(400).send([{ err: 'invalid parameters' }])
}

let addContentToList = async(req, res) =>{
    const data = req.body
    await contLstServ.addNewContent(data)
        .then(data => res.status(200).send(data))
        .catch(e => [{err:e.message}])

}

let addContentBdy

module.exports = {
    getContentList,
    getContentBody,
    addContentToList
}