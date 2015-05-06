/// <reference path="../typings/jasmine/jasmine.d.ts"/>

var GraphicalEditor = require("../src/graphical-editor");

describe("Tests of graphical editor instance", function() {
	it("Should create an instance of graphical editor", function() {
		var editor = new GraphicalEditor();
		expect(editor).toEqual(jasmine.any(GraphicalEditor));
	});
});