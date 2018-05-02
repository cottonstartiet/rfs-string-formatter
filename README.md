# string-formatter
String formatter utility functions for Javascript

## How to use
Import into your file
```
const formatter = require("rfs-string-formatter"); 
```
## Supported functions
### format(template, args)
Formats the template string using the args provides. Args can be different arguments or an array of values
```
formatter.format("String to be {0} and {1}", "formatted", "parsed")
```
OR
```
formatter.format("String to be {0} and {1}", ["formatted", "parsed"])
```

### formatReplace(template, argObj)
Formats the template string using the argObjec keys and their values
```
formatter.formatReplace("Today is {day} and the year is {year}", { day: "Monday", year: "2018" });
// Today is Monday and the year is 2018
``` 