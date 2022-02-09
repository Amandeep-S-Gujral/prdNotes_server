const projectRepoFactory = (container) => new ProjectRepo(container)

//------
class ProjectRepo {
    constructor(container) {
        this.db = container.db
    }

    async addNewProject(data) {
        const query = this.db.collection('project')
        const res = await query.add({ ...data })
        return { data, docId: res.id }
    }
}

module.exports = {
    projectRepoFactory,
    ProjectRepo
}