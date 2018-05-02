const expect = require('chai').expect;
const formatter = require('./../src/index');

describe('format replace tests', () => {
  it('should throw error if template string is null', (done) => {
    expect(() => formatter.formatReplace(null, {})).to.throw('Template string can not be null, undefined or empty');
    done();
  });

  it('should throw error if values is null', (done) => {
    expect(() => formatter.formatReplace("Replace {host}", null)).to.throw('Invalid arguments: values can not be null or undefined');
    done();
  });

  it('should replace template string using values', (done) => {
    const formatted = formatter.formatReplace("This is the template {first} {second}", {
      first: "abc",
      second: "def"
    });
    expect(formatted).to.eq('This is the template abc def');
    done();
  });
});