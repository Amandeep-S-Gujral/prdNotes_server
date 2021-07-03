const mocha = require('mocha')
const chai = require('chai')
const assert = chai.assert

const { ContBdyModl, contBdyModlFac } = require('./contentBdyModel')

describe('add content body to detail sub collection', function () {
    const mockAddData = {
        cid: '1',
        bdy: 'hello world',
        meta: 'find hello world',
    }

    const contBdy = contBdyModlFac(mockAddData)

    describe('1) instance of ContBdyModl', () => {
        //#1
        it('instanceOf', function () {
            assert.instanceOf(contBdy, ContBdyModl)
        })
    })

    describe('2) Type of', () => {
        //#2 
        it('typeOf', () => {
            Object.keys(contBdy).forEach(key => {
                if (key === 'timestamp') {
                    //if timestamp is undefined, Date.now() assigns a UNIX timestamp
                    assert.typeOf(contBdy[key], 'number')
                } else {
                    assert.typeOf(contBdy[key], typeof mockAddData[key])
                }
            })
        })
    })

    describe('3) equal to mock data', () => {
        it('equal', () => {
            Object.keys(mockAddData).forEach(key => {
                assert.equal(contBdy[key], mockAddData[key])
            })
        })
    })

    describe('4) has undefined properities', () => {
        it('undefined', () => {
            const arr = Object.keys(contBdy).filter(key => {
                if (!Object.keys(mockAddData).includes(key)) {
                    return key
                }
            })

            arr.forEach(key => {
                if (key !== 'timestamp') {
                    assert.equal(contBdy[key], undefined)
                    console.log(key)
                }
            })
        })
    })
})