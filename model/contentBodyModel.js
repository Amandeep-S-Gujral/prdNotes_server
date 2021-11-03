const contentBodyModelFactory = (dependency) => {
    const contentBody = new ContentBodyModel(dependency)
    return JSON.parse(JSON.stringify(contentBody))
}

class ContentBodyModel {
    constructor(dependency) {
        this.cid = dependency.cid
        this.body = dependency.body
        this.meta = dependency.meta
        this.type = dependency.type
        this.url = dependency.url
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