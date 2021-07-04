const {describe, it} = require('mocha')
const chai = require('chai')
const assert = chai.assert
const faker = require('faker')
const { ContLstModl, contLstModlFac } = require('../../model/contLstModl')


describe('content list model - add new', function () {

    mockData = {
        cid: faker.datatype.number,
        tle: faker.lorem.sentence,
        subTle: faker.lorem.sentence,
        img: faker.image.imageUrl,
        url: faker.internet.url,
        cat: faker.lorem.word,
        des: faker.lorem.paragraph,
        typ: faker.lorem.word,
    }

    const contLst = contLstModlFac(mockData)

    it('1) is instance of ContLstModl', function () {
        assert.instanceOf(contLst, ContLstModl)
    })

    it('2) typeOf instane is equal to type of mock', function () {
        Object.keys(contLst).forEach((key) => {

            if (key === 'timestamp') {
                //if timestamp is undefined, Date.now() assigns a unix timestamp
                assert.typeOf(contLst[key], 'number')
            } else {
                assert.typeOf(contLst[key], typeof mockData[key])
            }
        })
    })

    it('3) values of instance are equal to values of mock', function () {
        Object.keys(mockData).forEach(key => {
            assert.equal(contLst[key], mockData[key])
        })
    })

    it('4) instance has undefined properities', function () {
        const arr = Object.keys(contLst).filter(key => {
            if (!Object.keys(mockData).includes(key)) {
                return key
            }
        })

        arr.forEach(key => {
            if (key !== 'timestamp') {
                assert.equal(contLst[key], undefined)
            }
        })
        console.log(arr)
    })
})

