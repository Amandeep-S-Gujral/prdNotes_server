class Dic {
    constructor() {
        this.dependency = {}
    }

    setFactory(name, factory) {
        this[name] = () => factory(this)
    }

    setModule(name, module) {
        this[name] = module
    }
    setModel(name, model){
        this[name] = (obj) => model(obj)
    }

    getContainer() {
        return this
    }
}

module.exports = Dic