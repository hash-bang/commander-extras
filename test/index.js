var expect = require('chai').expect;
var commander = require('commander');
var commanderExtras = require('..');

describe('commander-extras', ()=> {

	it('should not effect existing functionality', ()=> {
		var cli = commander
			.option('-v, --verbose', 'Be verbose')
			.parse(['node', 'app.js', '-v']);

		expect(cli).to.have.property('verbose', true);
	});

	it('should extend the existing help system with .env', ()=> {
		var cli = commander
			.option('-v, --verbose', 'Be verbose')
			.env('FOO', 'Foo desription')
			.env('BAR', 'Bar desription')
			.note('Note one')
			.note('Note two')
			.env('BAZ', 'Baz desription')
			.note('Note three')
			.parse(['node', 'app.js', '--help']);
	});

});
