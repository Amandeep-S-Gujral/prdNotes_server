const extractProjectId = (req, res, next) => {
    console.log(req.headers.host)

    next()
}

module.exports = extractProjectId