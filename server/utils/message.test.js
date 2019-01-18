var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate message', () =>{
    it('should generate the correct message object', () => {
        var tfrom="admin";
        var ttext="message-content";
        var message = generateMessage(tfrom,ttext);
        expect(message.from).toBe(tfrom);
        expect(message.text).toBe(ttext);
        expect(typeof message.createdAt).toBe("number");
    });
});