const expect = require('chai').expect;
const formatter = require('./../src/index');

describe("format tests", () => {
  it('should throw error if template is null', (done) => {
    expect(() => formatter.format(null, 'abc')).to.throw('Template string can not be null, undefined or empty');
    done();
  });

  it('should throw error if args is null', (done) => {
    expect(() => formatter.format('replace {1}, {2}'), null).to.throw('Invalid arguments: Can not be null, undefined or zero length array');
    done();
  });

  it('should replace template using args', (done) => {
    const formatted = formatter.format('replace {0}, {1}', 'abc', 'def');
    expect(formatted).to.be.eq('replace abc, def');
    done();
  })

  it('should replace template using array', (done) => {
    const formatted = formatter.format('replace {0}, {1}', ['abc', 'def']);
    expect(formatted).to.be.eq('replace abc, def');
    done();
  })
});