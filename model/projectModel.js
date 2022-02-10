const projectModelFactory = (container) => new ProjectModel(container)

//-----
class ProjectModel {
    constructor(container) {
        this.projectURL = container.projectURL
        this.projectId = container.projectId === undefined ? undefined : container.projectId
        this.timestamp = container.timestamp === undefined ? Date.now() : container.timestamp
        this.admin = [container.admin]
    }
}

module.exports = {
    projectModelFactory,
    ProjectModel
}