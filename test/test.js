const wait = require('../index')

class Example {
    constructor() {
        this.init()
    }
    async init () {
        await wait(10000)
        console.log(1)
        return true
    }
}

module.exports = new Example()