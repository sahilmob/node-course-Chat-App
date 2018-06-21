var expect = require('expect')
var { generateMessage, generateLocationMessage } = require('./message.js')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        var res = generateMessage('Sahil', 'Hello from Sahil')

        expect(res.from).toBe('Sahil')
        expect(res.text).toBe('Hello from Sahil')
        expect(res.createdAt).toBeA('number')

    })

})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var res = generateLocationMessage('Admin', 1, 1)

        expect(res.from).toBe('Admin')
        expect(res.url).toBe('https://www.google.com/maps?q=1,1')
        expect(res.createdAt).toBeA('number')

    })
})