const { describe, it } = require('mocha')
const chai = require('chai')
const assert = chai.assert
const faker = require('faker')
const { ContLstModl, contLstModlFac } = require('../../model/contLstModl')
const { addNewContMock, likeOrShareContMock, postContMock } = require('../../mock/contLstModlMocks')

describe('Content List Model', function () {

    describe('add new/update content', function () {

        // act
        const contLst = contLstModlFac(addNewContMock)

        //assert
        it('1) on instanciation, contains all properities of mock ', function () {
            assert.containsAllKeys(contLst, addNewContMock)
        })

        it('2) on instanciation, "timestamp" is property of instance', function () {
            assert.property(contLst, 'timestamp')
        })

        it('3) on instanciation, if not true, "post" property is set to false', function () {
            assert.equal(contLst.post, false)
        })
    })

    describe('like/share content', function () {

        //act
        const contLst = contLstModlFac(likeOrShareContMock)

        //assert
        it('1) on instaciation, contains properties "like", "unlike" or "share"', function () {
            assert.containsAllKeys(contLst, ['like', 'dislike', 'share'])
        })

        it('2) on instanciation, "timestamp" is property of instance', function () {
            assert.property(contLst, 'timestamp')
        })
    })

    describe('post content to web for users', function () {

        //act
        const contLst = contLstModlFac(postContMock)

        //assert
        it('1) on instanciation, contains "post" property', function () {
            assert.property(contLst, 'post')
        })

        it('2) on instanciation, "post" is set to true', function () {
            assert.equal(contLst.post, true)
        })

        it('3) on instanciation, "timestamp" is property of instance', function () {
            assert.property(contLst, 'timestamp')
        })
    })
})

