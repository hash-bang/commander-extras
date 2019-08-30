Commander-Extras
================
Extremely small utility which adds additional functionality to the [Commander](https://github.com/tj/commander.js) NPM module.


```javascript
var commander = require('commander');
var commanderExtras = require('commander-extras');

var program = commander
	.option('-v, --verbose', 'Be verbose')
	.env('FOO', 'FOO Environment variable desription')
	.env('BAR', 'BAR Environment variable desription')
	.env('BAZ', 'FOO environment variable desription')
	.note('Note one')
	.note('Note two')
	.note('Note three')
	.parse(process.argv);
```


API
===
The following API's are added to the existing Commander prototype:


env(name, description)
----------------------
Used to define an environment variable.


example(cli, title)
----------------------
Used to define an example with an optional title.


note(description)
-----------------
Add an additional note to display at the bottom of the help output.
