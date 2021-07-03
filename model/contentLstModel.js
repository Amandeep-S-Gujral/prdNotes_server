const contLstModlFac = (dependency) => {
    const content = new ContLstModl(dependency)
    return content
}

//-------content list model class--------
class ContLstModl {
    constructor(dependency){
        this.cid = dependency.cid;
        this.tle = dependency.tle;
        this.subTle = dependency.subTle;
        this.img = dependency.img;
        this.url = dependency.url;
        this.cat = dependency.cat;
        this.des = dependency.des;
        this.typ = dependency.typ;
        this.post = dependency.post
        this.like = dependency.like
        this.dislike = dependency.dislike
        this.share = dependency.share
        this.timestamp = dependency.timestamp === undefined ? Date.now() : dependency.timestamp
    }
}

module.exports = {contLstModlFac, ContLstModl}