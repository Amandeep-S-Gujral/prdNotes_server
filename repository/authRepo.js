//-----auth repo factory-----
const authRepoFactory = (dependency) => {
    const repo = new AuthRepo(dependency)
    return repo
}

//-----auth repo class-----
class AuthRepo {
    constructor(obj) {
        this.auth = obj.auth
    }

    async getUserByUid(data){
        return this.auth.getUser(data.uid)
    }

    async addUser(data){
        return this.auth.createUser(data)
    }

    async updateUser(data, uid) {
        return this.auth.updateUser(uid, data)
    }

    async setCustomClaim(data, claimObj) {
        return this.auth.setCustomUserClaims(data.uid, claimObj)
    }
}

module.exports = {
    AuthRepo,
    authRepoFactory
}