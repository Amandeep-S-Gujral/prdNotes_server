const contLstServ = require('../service/contentLstService')

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
        const cid = req.query.cid
        const data = new Content({cid})
        await data.getContentBdy()
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send([{ err: e.message }]))
            return
    }
    res.status(400).send([{ err: 'invalid parameters' }])
}

let addContentToList = async(req, res) =>{
    const bdy = req.body
    console.log(bdy)
    const data = new Content(bdy)
    console.log(data)
  
    await data.addContentToList()
        .then(data => res.send('ok'))
        .catch(e => console.log(e))

}

module.exports = {
    getContentList,
    getContentBody,
    addContentToList
}