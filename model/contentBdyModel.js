const contBdyModlFac = (dependency) => {
    const contentBdy = new Contentbdy(dependency)
    return contentBdy
}

class Contentbdy{
    constructor(dependency){
        this.cid = dependency.cid,
        this.bdy = dependency.bdy,
        this.timestamp = dependency.timestamp === undefined ? Date.now() : dependency.timestamp
        this.like = dependency.like === undefined ? 0 : dependency.like
        this.unlike = dependency.unlike === undefined ? 0 : dependency.unlike
        this.share = dependency.share === undefined ? 0 : dependency.share
        this.comment = dependency.comment === undefined ? 0 : dependency.comment
    }
}

module.exports = contBdyModlFac