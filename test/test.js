var chai = require('chai');  
var expect = chai.expect;
require('colors');
const main = require('../dist/main.js');
const dev=require('../dist/dev.js')
test();
async function test(){
describe('Start', () => {
  describe('#Start', () => {
    it('Should start plugin', () => {
      const total = main.start();
      expect(total).to.be.equal(1);
    });
    
    
  });
    });

describe('Help', () => {
  describe('#ShowHelp', () => {
    it('Should show all commands' , () => {
      const total = main.help();
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
    /*
    blue, 
red,
yellow, 
green,
black, 
white, 
cyan, 
magenta, 
*/
        describe('#MagentaLog', () => {
    it('Should make plugin log magenta text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.magenta;
      const total = main.magenta(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#CyanLog', () => {
    it('Should make plugin log cyan text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.cyan;
      const total = main.cyan(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#WhiteLog', () => {
    it('Should make plugin log white text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.white;
      const total = main.white(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#BlackLog', () => {
    it('Should make plugin log black text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.black;
      const total = main.black(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#GreenLog', () => {
    it('Should make plugin log green text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.green;
      const total = main.green(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#YellowLog', () => {
    it('Should make plugin log yellow text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.yellow;
      const total = main.yellow(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
        describe('#RedLog', () => {
    it('Should make plugin log red text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.red;
      const total = main.red(text);
      expect(total).to.be.equal(expected);
    });
    
    
  });
    describe('#BlueLog', () => {
    it('Should make plugin log blue text', () => {
      const text = "Running Test... Please wait!";
      const expected = `${text}`.blue;
      const total = main.blue(text);
      expect(total).to.be.equal(expected);
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
  describe('#Dev functions set key', () => {
    it('Should set key to dev.', () => {
      const total = dev.set_key("Start");
      expect(total).to.be.equal("Start");
    });});
  describe('#Dev functions on', () => {
    it('Turn on dev functions.', () => {
      const total = dev.dev_on();
      expect(total).to.be.equal(1);
    });});
    
  describe('#Test Crash', () => {
    it('Initiates test crash, should handle error.', () => {
      const total = main.crash();
      expect(total).to.be.equal(1);
    });
    
    
  });
    });
describe('Reset', () => {
  describe('#Reset', () => {
    it('Should reset temp settings.', () => {
      const total = main.reset();
      expect(total).to.be.equal(1);
    });
   });
    describe('#Runlog', () => {
    it('Should not execute log command and show error message.', () => {
      const total = main.log('Test');
      expect(total).to.be.equal(15);
    });
    
    
  });
    describe('#Start', () => {
    it('Should start package.', () => {
      const total = main.start();
      expect(total).to.be.equal(1);
    });
    
    
  });
    
  describe('#RunLog2', () => {
    it('Should log text without errors.', () => {
      const total = main.log('Test');
      expect(total).to.be.equal('Test');
    });
    
    
  });
    });
 } 