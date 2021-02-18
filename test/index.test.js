const chai = require('chai')
const expect = chai.expect

const validator = require('../src/index')

describe("validator main()", () => {

    it("should return false", ()=> {
        expect(validator.main()).to.be.false
    })
})
