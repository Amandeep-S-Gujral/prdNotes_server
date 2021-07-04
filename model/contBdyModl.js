const contBdyModlFac = (dependency) => {
    const contentBdy = new ContBdyModl(dependency)
    return contentBdy
}

class ContBdyModl{
    constructor(dependency){
        this.cid = dependency.cid
        this.bdy = dependency.bdy
        this.meta = dependency.meta
        this.timestamp = dependency.timestamp === undefined ? Date.now() : dependency.timestamp
        this.like = dependency.like
        this.unlike = dependency.unlike
        this.share = dependency.share
    }
}

module.exports = {ContBdyModl, contBdyModlFac}