export const contentBdyFactory = (dependency) => {
    const contentBdy = new ContentBdy(dependency)
     return contentBdy
}

//------ContentBody Model-------
class ContentBdy {
    constructor(dependency){
        this.bdy = dependency.bdy,
        this.cid = dependency.cid,
        this.timestamp = dependency.timestamp === null? Date.now() : dependency.timestamp
        this.like = dependency.like
        this.dislike = dependency.dislike
        this.share = dependency.share
    }
}