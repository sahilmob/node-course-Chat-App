var expect = require('expect')
var { generateMessage } = require('./message.js')

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        var res = generateMessage('Sahil', 'Hello from Sahil')

        expect(res.from).toBe('Sahil')
        expect(res.text).toBe('Hello from Sahil')
        expect(res.createdAt).toBeA('number')

    })

})