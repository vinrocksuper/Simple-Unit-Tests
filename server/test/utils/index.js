const config = require('../test_config.js');
const utils = require('../../src/utils');
//
const { limits } = config;
//

describe('utils', () => {
  describe('add', () => {
    it('should return sum of two numbers', (done) => {
      const sum = utils.add(5, 10);
      sum.should.equal(15);
      done();
    });

    it('should clamp to the max', (done) => {
      const sum = utils.add(5, 10000);
      sum.should.equal(limits.MAX);
      done();
    });

    it('should clamp to the min', (done) => {
      const sum = utils.add(-5, 1);
      sum.should.equal(limits.MIN);
      done();
    });
  });

  describe('subtract', () => {
    it('should return difference of two numbers', (done) => {
      const diff = utils.sub(10, 5);
      diff.should.equal(5);
      done();
    });

    it('should clamp to the max', (done) => {
      const sum = utils.add(20000, 5);
      sum.should.equal(limits.MAX);
      done();
    });

    it('should clamp to the min', (done) => {
      const sum = utils.sub(5, 10000);
      sum.should.equal(limits.MIN);
      done();
    });
  });
});
