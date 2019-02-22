const expect = require('chai').expect
describe('/lib/index.js', () => {
    it('wait', async () => {
        const wait = require('../index')
        let a = 1
        await wait(1000)
        a = 2
        console.log
        expect(a).to.be.equal(2)
    });
});