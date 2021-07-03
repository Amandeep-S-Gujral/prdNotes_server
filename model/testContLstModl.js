const mocha = require('mocha')
const chai = require('chai')
const assert = chai.assert
const { ContLstModl, contLstModlFac } = require('./contentLstModel')


describe('add content list to content collection', function () {

    mockAddData = {
        cid: '1',
        tle: 'hello world',
        subTle: 'welcome!',
        img: 'https://prdnotes.com/img',
        url: 'https://prdnotes.com/url',
        cat: 'test',
        des: 'unit testing',
        typ: 'unit test',
    }

    const contLst = contLstModlFac(mockAddData)

    describe('1) is instance of contLstModl', function () {
        it('isInstanceOf', function () {
            assert.instanceOf(contLst, ContLstModl)
        })
    })

    describe('2) is typeOf', function () {
        it('isTypeOf', function () {
            Object.keys(contLst).forEach((key) => {

                if (key === 'timestamp') {
                    //if timestamp is undefined, Date.now() assigns a unix timestamp
                    assert.typeOf(contLst[key], 'number')
                } else {
                    assert.typeOf(contLst[key], typeof mockData[key])
                }
            })
        })
    })

    describe('3) is equal to mockdata', function () {
        it('is equal', function () {
            Object.keys(mockData).forEach(key => {
                assert.equal(contLst[key], mockData[key])
            })
        })
    })

    describe('4) has undefined properties', function () {
        it('is undefined', function () {
            const arr = Object.keys(contLst).filter(key => {
                if (!Object.keys(mockData).includes(key)) {
                    return key
                }
            })

            arr.forEach(key => {
                if (key !== 'timestamp') {
                    assert.equal(contLst[key], undefined)
                    console.log(key)
                }
            })
        })
    })
})

