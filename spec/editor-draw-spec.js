/// <reference path="../typings/jasmine/jasmine.d.ts"/>

var GraphicalEditor = require("../src/graphical-editor");

describe("Tests of graphical editor draw commands", function() {
	var editor,
		colorA = "A",
		colorB = "B",
		whiteColor = "O",
		rows = 5,
		cols = 4;
	
	beforeEach(function() {
		editor = new GraphicalEditor();
		editor.initialize(rows, cols);
	});
	
	it("Should draw a pixel", function() {
		var row = 2, col = 3, color = colorA, 
			output = [
				["O", "O", "O", "O"], 
				["O", "O", "A", "O"], 
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"]];
			
		editor.drawPixel(row, col, color);
			
		expect(editor.table).toEqual(output);
	});
	
	it("Should clear the current table", function() {
		var output = [
			["O", "O", "O", "O"], 
			["O", "O", "O", "O"], 
			["O", "O", "O", "O"], 
			["O", "O", "O", "O"], 
			["O", "O", "O", "O"]];
		
		editor.clear();
		
		expect(editor.table).toEqual(output);
	});
		
	it("Should draw a vertical line", function() {
		var col = 2, rowStart = 3, rowFinish = 5, color = colorA, 
			output = [
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"], 
				["O", "A", "O", "O"], 
				["O", "A", "O", "O"], 
				["O", "A", "O", "O"]];
			
		editor.drawVerticalLine(rowStart, rowFinish, col, color);
		
		expect(editor.table).toEqual(output);
	});
});

//	var output = [
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"]];