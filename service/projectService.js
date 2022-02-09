const projectServiceFactory = (container) => new ProjectService(container)

//-----
class ProjectService {
    constructor(container) {
        this.projectRepo = container.projectRepo
    }

    async addNewProject(data) {
        if (data.projectId === undefined) {
            const urlArr = data.projectURL.split(/\./gm)
            const len = urlArr.length
            data.projectId = urlArr[len - 2] + 'dot' + urlArr[len - 1]
        }
        return await this.projectRepo().addNewProject(data)
    }
}

module.exports = {
    projectServiceFactory,
    ProjectService
}