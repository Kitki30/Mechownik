var chai = require('chai');  
var expect = chai.expect;
require('colors');
const main = require('../dist/main.js');

describe('Start', () => {
  describe('#Start', () => {
    it('Should start plugin', () => {
      const total = main.start();
      expect(total).to.be.equal(1);
    });
    
    
  });
    });
describe('Log', () => {
  describe('#Log', () => {
    it('Should make plugin log text', () => {
      const text = "Running Test... Please wait!"
      const total = main.log(text);
      expect(total).to.be.equal(text);
    });
    
    
  });
  describe('#ColorLog', () => {
    it('Should make plugin log colored text', () => {
      const text = "Running Test... Please wait!".green
      const total = main.log(text);
      expect(total).to.be.equal(text);
    });
    
    
  });
    });