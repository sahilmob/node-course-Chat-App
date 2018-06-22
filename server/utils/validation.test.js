const expect = require('express')

const { isRealString } = require('./validation.js')

describe('isRealString', () => {
    it('should return false when we pass non-string to the isRealString function', () => {

        var res = isRealString({ 1: 1 })

        expect(res).toString(false)
    })

    it('should return false when we pass a string with only spaces to the isRealString function', () => {

        var res = isRealString('      ')

        expect(res).toString(false)
    })

    it('should return true when we pass a string to the isRealString function', () => {

        var res = isRealString('Sahil')

        expect(res).toString(true)
    })


})