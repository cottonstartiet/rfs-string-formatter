const templateFormatter = require('./formatters/template-formatter');

module.exports = {
  format: templateFormatter.format,
  formatReplace: templateFormatter.formatReplace
}
