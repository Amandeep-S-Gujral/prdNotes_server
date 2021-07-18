const { describe, it } = require('mocha')
const chai = require('chai')
const assert = chai.assert
const sinon = require('sinon')
const { contLstModlFac } = require('../../model/contLstModl')
const constLstServ = require('../../service/contLstServ')
const contLstServ = require('../../service/contLstServ')

describe('content list service', function () {

    describe('get content list by type', function () {

        //assign
        const spy = sinon.spy(contLstModlFac)
        //act
        contLstServ.getContLstByTyp({ typ: 'a' })

        //assert
        it('1) contLstModlFac is called once', function () {
            assert.isTrue(spy.calledOnce)
        })
    })
})