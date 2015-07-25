#!/usr/bin/env node
'use strict';
var meow = require('meow');
var tripcase = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ tripcase [input]',
		'',
		'Examples',
		'  $ tripcase',
		'  unicorns & rainbows',
		'',
		'  $ tripcase ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(tripcase(cli.input[0] || 'unicorns'));
