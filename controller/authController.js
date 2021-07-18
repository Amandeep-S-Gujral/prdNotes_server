const authControllerFactory = (dependency) => {
    const controller = new AuthController(dependency)
    return controller
}

class AuthController{
    constructor(dependency){
        this.dependency = dependency
    }

    async signIn(req, res) {
        const data = this.dependency.userModel(req.body)
        await this.dependency.authService().signIn(data)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(400).send([{err: e.message}]))
    }

    async signUp(req, res){
        const data = this.dependency.userModel(req.body)
        await this.dependency.authService().signUp(data)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(400).send([{err: e.message}]))
    }

    async getProfile(req, res){
        const data = this.dependency.userModel(req.body)
        await this.dependency.authService().getProfile(data)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(400).send([{err: e.message}]))
    }

    async setProfile(req, res){
        const data = this.dependency.userModel(req.body)
        await this.dependency.authService().getProfile(data)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(200).send([{err: e.message}]))
    }
}

module.exports = {
    AuthController,
    authControllerFactory
}