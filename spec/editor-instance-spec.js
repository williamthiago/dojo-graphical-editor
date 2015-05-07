/// <reference path="../typings/jasmine/jasmine.d.ts"/>

var GraphicalEditor = require("../src/graphical-editor");

describe("Tests of graphical editor instance", function() {
	var editor; 
	beforeEach(function() {
		editor = new GraphicalEditor();
	});

	it("Should create an instance of graphical editor", function() {
		expect(editor).toEqual(jasmine.any(GraphicalEditor));
	});
	
	it("Should initialize a table MxN (col x row)", function() {
		var rows = 2, cols = 3,
			output = [["O", "O", "O"], ["O", "O", "O"]];
		
		editor.initialize(rows, cols);
		
		expect(editor.table).toEqual(output);
	});
	
	it("Should throw error if M < 1", function() {
		var cols = 0,
			rows = 10;
		
		var closure = function() {
			editor.initialize(rows, cols);
		};
		
		expect(closure).toThrow("Cols must be between 1 and M, M must be greather than 0");
	});
	
	it("Should throw error if N > 250", function() {
		var cols = 1,
			rows = 251;
		
		var closure = function() {
			editor.initialize(rows, cols);
		};
		
		expect(closure).toThrow("Rows must be between 1 and N, N must be less than 250");
	});

});