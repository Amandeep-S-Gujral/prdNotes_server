//-----auth repo factory-----
const authRepoFactory = (dependency) => {
    const repo = new authRepoFactory(dependency)
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

    async getUserByEmail(data) {
        return this.auth.getUserByEmail(data.email)
    }

    async verifyUser(idToken){
        return this.auth.verifyIdToken(idToken)
    }

    async createUser(data) {
        return this.auth.createUser(data)
    }

    async updateUser(data, uid) {
        return this.auth.updateUser(uid, data)
    }
}