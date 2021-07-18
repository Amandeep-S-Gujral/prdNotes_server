const authServiceFactory = (dependency) => {
    const service = new AuthService(dependency)
    return service
}

class AuthService{
    constructor(obj){
        this.authRepo = obj.authRepo
    }

    async signIn(data){
        let user
        await this.authRepo().getUserByEmail(data)
            .then(obj => user = obj)
            .catch(e => {throw new Error('incorrect email address!')})
        
        if(data.password !== user.password){
            throw new Error('incorrect password!')
        }

        return user
    }

    async signUp(data){
        return this.authRepo().createUser(data)
    }

    async getProfile(data){
        return this.authRepo.getUserByUid(data)
    }

    async setProfile(data){
        return this.authRepo.updateUser(data)
    }
}

module.exports = {
    AuthService,
    authServiceFactory
}