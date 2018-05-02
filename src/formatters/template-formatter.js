module.exports = {
  /**
   * Formats a template string and replaces placeholders with arguments
   * For e.g. if Template - "This is a {0} and {1} module"
   *             and args - "nice", "cool" OR ["nice", "cool"]
   *             returns "This is nice and cool module"
   * 
   * @param {string} template Template string with format "This is a {0} {1} module"
   * @param {any} args arguments "nice", "cool" OR ["nice", "cool"]
   * @returns {string} Formatted string "This is a nice cool module"
   */
  format(template, ...args) {
    if (!template) {
      throw new Error("Template string can not be null, undefined or empty");
    }

    if (!args || args.length === 0) {
      throw new Error("Invalid arguments: Can not be null, undefined or zero length array");
    }

    let formatted = template;
    if (typeof arguments[1] === 'string') {
      for (i = 0; i < args.length; i++) {
        formatted = formatted.replace(new RegExp("\\{" + i + "\\}", "gm"), args[i]);
      }
    } else {
      const replaceValues = Array.from(arguments[1]);
      for (i = 0; i < replaceValues.length; i++) {
        formatted = formatted.replace(new RegExp("\\{" + i + "\\}", "gm"), replaceValues[i]);
      }
    }

    return formatted;
  },
  /**
   * Formats a template string and replaces placeholders with arguments
   * For e.g. if Template - "This is a {type} {language} module"
   *             and args - { type: "cool", language: "node.js" }
   *             returns "This is cool node.js module"
   * 
   * @param {string} template Template string with format "This is a {name1} {name2} module"
   * @param {object} args arguments { type: "cool", language: "node.js" }
   * @returns {string} Formatted string
   */
  formatReplace(template, values) {
    if (!template) {
      throw new Error('Template string can not be null, undefined or empty');
    }

    if (!values) {
      throw new Error('Invalid arguments: values can not be null or undefined');
    }

    let formatted = template;
    Object.keys(values).forEach((key) => {
      formatted = formatted.replace(new RegExp('\\{' + key + '\\}', 'gm'), values[key]);
    })

    return formatted;
  }
}