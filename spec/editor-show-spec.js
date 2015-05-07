/// <reference path="../typings/jasmine/jasmine.d.ts"/>

var GraphicalEditor = require("../src/graphical-editor");

describe("Tests of graphical editor show command", function() {
	var editor,
		color = "A",
		rows = 5,
		cols = 4;
	
	beforeEach(function() {
		editor = new GraphicalEditor();
		editor.initialize(rows, cols);
	});
	
	it("Should print a pixel", function() {
		var row = 2, col = 3, 
			output = "OOOO\nOOAO\nOOOO\nOOOO\nOOOO\n";
			
		editor.drawPixel(row, col, color);
		expect(editor.toString()).toEqual(output);
	});

	it("Should print a filled rectangle", function() {
		var rowStart = 3, colStart = 2, rowFinish = 5, colFinish = 4, 
			output = "OOOO\nOOOO\nOAAA\nOAAA\nOAAA\n";
			
		editor.drawFilledRectangle(rowStart, colStart, rowFinish, colFinish, color);
		expect(editor.toString()).toEqual(output);
	});
	
	it("Should print a vertical line", function() {
		var col = 2, rowStart = 3, rowFinish = 5,
			output = "OOOO\nOOOO\nOAOO\nOAOO\nOAOO\n";
			
		editor.drawVerticalLine(rowStart, rowFinish, col, color);
		expect(editor.toString()).toEqual(output);
	});
	
	it("Should print a horizontal line", function() {
		var row = 3, colStart = 2, colFinish = 4,
			output = "OOOO\nOOOO\nOAAA\nOOOO\nOOOO\n";
			
		editor.drawHorizontalLine(row, colStart, colFinish, color);
		expect(editor.toString()).toEqual(output);
	});
	
	it("Should print a filled region", function() {
		var output = "OOCC\nOOCC\nBBBA\nAAAA\nAAAA\n";

		editor.drawFilledRectangle(1, 3, 2, 4, "C");
		editor.drawHorizontalLine(3, 1, 3, "B");
		editor.fillRegion(4, 2, color);
		expect(editor.toString()).toEqual(output);
	});
	
	it("Should print a empty table", function() {
		var output = "OOOO\nOOOO\nOOOO\nOOOO\nOOOO\n";
		expect(editor.toString()).toEqual(output);
	});
	
});