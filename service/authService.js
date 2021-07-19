const authServiceFactory = (dependency) => {
    const service = new AuthService(dependency)
    return service
}

class AuthService{
    constructor(obj){
        this.authRepo = obj.authRepo
    }

    async getProfile(data){
        return this.authRepo().getUserByUid(data)
    }

    async addUser(data, claimObj){
        await this.authRepo().addUser(data)
            .then(obj => data.uid = obj.uid)
            .catch(e => {throw new Error(e.mesage)})
        
        return this.setCustomClaim(data, claimObj)
    }

    async setProfile(data){
        return this.authRepo().updateUser(data)
    }

    async setCustomClaim(data, claimObj){
        await this.authRepo().setCustomClaim(data, claimObj)
            .then(obj => obj)
            .catch(e => {throw new Error(e.message)})
        return this.getProfile(data)
    }
}

module.exports = {
    AuthService,
    authServiceFactory
}