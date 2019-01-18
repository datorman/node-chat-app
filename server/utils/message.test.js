var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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
describe('generate location message', () => {
    it('should generate a correct location object', () =>{
        var tfrom = "admin";
        var tlatitude = 5;
        var tlongitude = 5;
        var message = generateLocationMessage(tfrom,tlatitude,tlongitude);
        expect(message.from).toBe(tfrom);
        expect(message.url).toBe(`https://www.google.com/maps/?q=${tlatitude},${tlongitude}`);
        expect(typeof message.createdAt).toBe("number");
    });
});