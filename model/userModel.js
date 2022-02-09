//-----user model factory-----
const userModelFactory = (container) => {
    const model = new UserModel(container)
    return JSON.parse(JSON.stringify(model))
}

//-----user model class-----
class UserModel {
    constructor(container) {
        this.uid = container.uid
        this.email = container.email
        this.emailVerified = container.emailVerified
        this.phoneNumber = container.phoneNumber
        this.password = container.password
        this.displayName = container.displayName
        this.photoURL = container.photoURL
        this.disable = container.disable
        this.projectId = container.projectId
        this.timestamp = container.timestamp === undefined? Date.now() : container.timestamp
    }
}

module.exports = {
    UserModel,
    userModelFactory
}