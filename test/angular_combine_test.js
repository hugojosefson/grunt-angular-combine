'use strict';

var grunt = require('grunt');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports.angular_combine = {
	setUp : function (done) {
		// setup here if necessary
		done();
	},
	test1 : function (test) {
		var actual = grunt.file.read('tmp/combined/test1.html');
		var expected = grunt.file.read('test/expected/test1.html');
		test.equal(actual, expected, 'test1 files should be equals.');
		test.done();
	},
	test2 : function (test) {
		var actual = grunt.file.read('tmp/combined/test2.html');
		var expected = grunt.file.read('test/expected/test2.html');
		test.equal(actual, expected, 'test2 files should be equals.');
		test.done();
	},
	test3 : function (test) {
		var actual = grunt.file.read('tmp/combined/test3.html');
		var expected = grunt.file.read('test/expected/test3.html');
		test.equal(actual, expected, 'test3 files should be equals.');
		test.done();
	}
};
//default_options: function(test) {
//test.expect(1);
//
//var actual = grunt.file.read('tmp/default_options');
//var expected = grunt.file.read('test/expected/default_options');
//test.equal(actual, expected, 'should describe what the default behavior
//is.');
//
//test.done();
//},
//custom_options: function(test) {
//test.expect(1);
//
//var actual = grunt.file.read('tmp/custom_options');
//var expected = grunt.file.read('test/expected/custom_options');
//test.equal(actual, expected, 'should describe what the custom option(s)
//behavior is.');
//
//test.done();
//},
