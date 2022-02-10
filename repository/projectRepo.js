const projectRepoFactory = (container) => new ProjectRepo(container)

//------
class ProjectRepo {
    constructor(container) {
        this.db = container.db
    }

    async getProjectListByAdmin(data){
        const query = this.db.collection('project').where('admin', 'array-contains', data)
        const snapshot = await query.get()
        if(snapshot.empty){
            throw new Error('project doesnot exist!')
        }
        const res = await snapshot.docs.map(doc => doc.data())
        return res
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