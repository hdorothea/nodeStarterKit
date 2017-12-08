const { expect } = require('chai');
const { sum } = require('../main');

describe('sum', () => {
  it('it adds up two value', () => {
    expect(sum(2, 2)).to.equal(4);
  });
});
