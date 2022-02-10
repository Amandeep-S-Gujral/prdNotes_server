const extractProjectId = (req, res, next) => {
    try {
        let url = new URL(req.headers.origin)
        if (req.headers.origin === 'http://localhost:3000') {
            url = new URL('https://www.prdnotes.com')
        }
        const urlArr = url.hostname.split(/\./gm) //replace the last '.' with 'dot' e.g. prdnotes.com => prdnotes+'dot'+com
        const len = urlArr.length
        req.body.projectId = urlArr[len - 2] + 'dot' + urlArr[len - 1]
        next()
    } catch (e) {
        res.status(400).send({ err: e.message })
    }

}

module.exports = { extractProjectId }