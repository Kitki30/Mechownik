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
describe('Info', () => {
  describe('#Info', () => {
    it('Should show info about package', () => {
      const total = main.info();
      expect(total).to.be.equal(1);
    });
    
    
  });
    });
describe('Crash', () => {
  describe('#Test Crash', () => {
    it('Initiates test crash, should handle error.', () => {
      const total = main.crash();
      expect(total).to.be.equal(1);
    });
    
    
  });
    });