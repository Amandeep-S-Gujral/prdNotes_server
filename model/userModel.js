//-----user model factory-----
const userModelFactory = (dependency) => {
    const model = new UserModel(dependency)
    return JSON.parse(JSON.stringify(model))
}

//-----user model class-----
class UserModel {
    constructor(obj) {
        this.uid = obj.uid
        this.email = obj.email
        this.emailVerified = obj.emailVerified
        this.phoneNumber = obj.phoneNumber
        this.password = obj.password
        this.displayName = obj.displayName
        this.photoURL = obj.photoURL
        this.disable = obj.disable
    }
}

module.exports = {
    UserModel,
    userModelFactory
}