module.exports = {
  /**
   * Function that formats a template string and replaces placeholders with arguments
   * For e.g. if Template - "This is a {0} {1} module"
   *             and args - "nice", "cool" OR ["nice", "cool"]
   *             returns "This is nice and cool module"
   * 
   * @param {any} template Template string with format "This is a {0} {1} module"
   * @param {any} args arguments "nice", "cool" OR ["nice", "cool"]
   * @returns {string} Formatted string
   */
  format(template, ...args) {
    let format = "";
    if (!template) {
      throw new Error("Template string can not be null, undefined or empty");
    }

    if (!args) {
      throw new Error("Invalid arguments: Can not be null, undefined or zero length array");
    }

    if (args instanceof Array) {
      for (i = 0; i < args.length; i++) {
        format = template.replace(new RegExp('\\{' + i + '\\}', 'gm'), args[i]);
      }
    } else {
      for (i = 0; i < arguments.length - 1; i++) {
        format = template.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i + 1]);
      }
    }
    
    return format;
  }
}