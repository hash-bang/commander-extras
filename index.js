var commander = require('commander');

// Imports from main modulea {{{
function pad(str, width) {
	var len = Math.max(0, width - str.length);
	return str + Array(len + 1).join(' ');
}
// }}}

// .env() {{{
commander.Command.prototype._envs = [];
commander.Command.prototype.env = function(name, desc) {
	this._envs.push([name, desc]);
	return this;
};
// }}}

// .note() {{{
commander.Command.prototype._notes = [];
commander.Command.prototype.note = function(note) {
	this._notes.push(note);
	return this;
};
// }}}

// Extend existing help {{{
commander.Command.prototype.helpInformationOriginal = commander.Command.prototype.helpInformation;
commander.Command.prototype.helpInformation = function() {
	var help = '';
	var width = this.padWidth();
	help += this.helpInformationOriginal();

	// Env
	if (this._envs.length) {
		help += '\nEnvironment variables:\n';
		this._envs.forEach(e => {
			help += '  ' + pad(e[0], width) + '  ' + e[1] + '\n';
		});
	}

	// Notes
	if (this._notes.length) {
		help += '\nNotes:\n';
		this._notes.forEach(note => {
			help += '  * ' + note + '\n'
		});
	}

	return help;
};
// }}}
