const {describe, it} = require('mocha')
const chai = require('chai')
const faker = require('faker')
const assert = chai.assert

const { ContBdyModl, contBdyModlFac } = require('../../model/contBdyModl')

describe('content body model - add new', function () {
    const mockData = {
        cid: faker.datatype.number,
        bdy: faker.datatype.string,
        meta: faker.datatype.string
    }

    const contBdy = contBdyModlFac(mockData)

    it('1) instanceOf ContBdyModl', function () {
        assert.instanceOf(contBdy, ContBdyModl)
    })

    it('2) typeOf instance is equal to typeOf mock', () => {
        Object.keys(contBdy).forEach(key => {
            if (key === 'timestamp') {
                //if timestamp is undefined, Date.now() assigns a UNIX timestamp
                assert.typeOf(contBdy[key], 'number')
            } else {
                assert.typeOf(contBdy[key], typeof mockData[key])
            }
        })
    })

    it('3) values of instance are equal to mock', () => {
        Object.keys(mockData).forEach(key => {
            assert.equal(contBdy[key], mockData[key])
        })
    })

    it('4) instance has undefined properities', () => {
        const arr = Object.keys(contBdy).filter(key => {
            if (!Object.keys(mockData).includes(key)) {
                return key
            }
        })

        arr.forEach(key => {
            if (key !== 'timestamp') {
                assert.equal(contBdy[key], undefined)
            }
        })
        console.log(arr)
    })
})