//require testing module
const mocha = require('mocha')
const chai = require('chai').expect
//require the module that we are outting to the test



// prove all the things
describe('My comprehension of the JS basics is solid', () => {

    //prove statements that support 
    it('and this proves my awesomeness with JS', () => {
        expect('Hello World').to.be.a('string');
        expect({}).to.be.an('object');
        expect(null).to.be.a('null');
        expect(undefined).to.be.an('undefined');
        expect([]).to.be.an('array').that.is.empty;
        expect([5,4,3,2,1]).to.be.an('array').that.includes(5);
        expect('I am a strong string').to.not.be.an('array')
        expect({model: 'Toyota'}).to.have.a.property('model');
        expect({make: 'tesla', model: 'cybertruck'}).to.include({make: 'tesla', model: 'cybertruck'});
    })
    




})
