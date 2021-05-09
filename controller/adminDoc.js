const AdminDoc = require('../model/AdminDoc')

const getAdminDocByNam = async (req, res) => {
    const docNam = req.params.docNam
    console.log(docNam)
    const data = new AdminDoc(docNam)
    await data.getDocByNam(docNam)
        .then(data => res.status(200).send(data))
        .catch(e => res.status(400).send([{ err: e.message }]))
}

module.exports = {
    getAdminDocByNam
}