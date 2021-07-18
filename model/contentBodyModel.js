const contentBodyModelFactory = (dependency) => {
    const contentBody = new ContentBodyModel(dependency)
    return JSON.parse(JSON.stringify(contentBody))
}

class ContentBodyModel {
    constructor(dependency) {
        this.cid = dependency.cid
        this.bdy = dependency.bdy
        this.meta = dependency.meta
        this.timestamp = dependency.timestamp === undefined ? Date.now() : dependency.timestamp
        this.like = dependency.like
        this.unlike = dependency.unlike
        this.share = dependency.share
        this.post = dependency.post !== true ? false : true
    }
}

module.exports = {
    ContentBodyModel,
    contentBodyModelFactory
}