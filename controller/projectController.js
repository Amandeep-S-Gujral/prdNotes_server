const projectControllerFactory = (container) => new ProjectController(container)

//-----
class ProjectController{
    constructor(container){
        this.projectModel = container.projectModel
        this.projectService = container.projectService
    }

    async addNewProject(req, res){
        const data = this.projectModel(req.body)
        await this.projectService().addNewProject(data)
            .then(data => res.status(200).send(data))
            .catch(e => res.status(400).send({err:e.message}))
        return
    }
}

module.exports = {
    projectControllerFactory,
    ProjectController
}