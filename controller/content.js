const contLstServ = require('../service/contentLstService')
const contBdyServ = require('../service/contentBdyService')

//get index list of content by passing type e.g. article, book, etc.
let getContLst = async (req, res) => {

    const data = { typ: req.query.typ }

    await contLstServ.getContLstByTyp(data)
        .then(data => res.status(200).send(data))
        .catch(e => res.status(400).send([{ err: e.message }]))
    return
}

//get content body by cid
let getContBdy = async (req, res) => {

    const data = { cid: req.query.cid }
    await contBdyServ.getContBdyByCid(data)
        .then(data => res.status(200).send(data))
        .catch(e => res.status(400).send([{ err: e.message }]))
    return
}

//add new content in content collection and detail subcollection
let addCont = async (req, res) => {
    const data = req.body
    await contLstServ.addNewContent(data)
        .then(data => res.status(200).send(data))
        .catch(e => [{ err: e.message }])
}

//set content list
// let setCont = async (req, res) => {
//     const data = req.body
    
// }


module.exports = {
    getContLst,
    getContBdy,
    addCont
}