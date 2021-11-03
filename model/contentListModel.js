const contentListModelFactory = (dependency) => {
    const content = new ContentListModel(dependency)
    return JSON.parse(JSON.stringify(content))
}

//-------content list model class--------
class ContentListModel {
    constructor(dependency){
        this.cid = dependency.cid;
        this.title = dependency.title;
        this.subTitle = dependency.subTitle;
        this.image = dependency.image;
        this.url = dependency.url;
        this.category = dependency.category;
        this.description = dependency.description;
        this.type = dependency.type;
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