const contentListModelFactory = (dependency) => {
    const content = new ContentListModel(dependency)
    return JSON.parse(JSON.stringify(content))
}

//-------content list model class--------
class ContentListModel {
    constructor(dependency){
        this.cid = dependency.cid;
        this.tle = dependency.tle;
        this.subTle = dependency.subTle;
        this.img = dependency.img;
        this.url = dependency.url;
        this.cat = dependency.cat;
        this.des = dependency.des;
        this.typ = dependency.typ;
        this.post = dependency.post !== true ? false : true;
        this.like = dependency.like
        this.dislike = dependency.dislike
        this.share = dependency.share
        this.timestamp = dependency.timestamp === undefined ? Date.now() : dependency.timestamp
    }
}

module.exports = {
    ContentListModel,
    contentListModelFactory
}