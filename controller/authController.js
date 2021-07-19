const authControllerFactory = (dependency) => {
    const controller = new AuthController(dependency)
    return controller
}

class AuthController {
    constructor(dependency) {
        this.dependency = dependency
    }

    async getProfile(req, res) {
        const data = this.dependency.userModel(req.body)
        await this.dependency.authService().getProfile(data)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(400).send([{ err: e.message }]))
        return
    }

    async addUser(req, res) {
        const data = this.dependency.userModel(req.body)
        const claimObj = {}
        claimObj[req.query.claim] = req.query.claimStatus
        await this.dependency.authService().addUser(data, claimObj)
            .then(obj => res.status(200).send(obj))
            .catch(e => [{ err: e.mesage }])
        return
    }

    async setProfile(req, res) {
        const data = this.dependency.userModel(req.body)
        if (data.password === undefined) {
            await this.dependency.authService().getProfile(data)
                .then(obj => res.status(200).send(obj))
                .catch(e => res.status(200).send([{ err: e.message }]))
        }
        return
    }

    async setCustomClaim(req, res) {
        const data = this.dependency.userModel(req.body)
        const claimObj = {}
        claimObj[req.query.claim] = req.query.claimStatus
        await this.dependency.authService().setCustomClaim(data, claimObj)
            .then(obj => res.status(200).send(obj))
            .catch(e => res.status(400).send([{ err: e.message }]))
        return
    }
}

module.exports = {
    AuthController,
    authControllerFactory
}