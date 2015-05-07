/// <reference path="../typings/jasmine/jasmine.d.ts"/>

var GraphicalEditor = require("../src/graphical-editor");

describe("Tests of graphical editor draw commands", function() {
	var editor,
		colorA = "A",
		colorB = "B",
		colorC = "C",
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
	
	it("Should draw a horizontal line", function() {
		var row = 3, colStart = 2, colFinish = 4, color = colorA, 
			output = [
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"], 
				["O", "A", "A", "A"], 
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"]];
			
		editor.drawHorizontalLine(row, colStart, colFinish, color);
		
		expect(editor.table).toEqual(output);
	});
	
	it("Should draw a filled rectangle line", function() {
		var rowStart = 3, colStart = 2, rowFinish = 5, colFinish = 4, color = colorA, 
			output = [
				["O", "O", "O", "O"], 
				["O", "O", "O", "O"], 
				["O", "A", "A", "A"], 
				["O", "A", "A", "A"], 
				["O", "A", "A", "A"]];
			
		editor.drawFilledRectangle(rowStart, colStart, rowFinish, colFinish, color);
		
		expect(editor.table).toEqual(output);
	});
	
	it("Should fill a full region with other color", function() {
		var row = 2, col = 2, color = colorA, 
			output = [
				["A", "A", "A", "A"], 
				["A", "A", "A", "A"], 
				["A", "A", "A", "A"], 
				["A", "A", "A", "A"], 
				["A", "A", "A", "A"]];
			
		editor.fillRegion(row, col, color);
		
		expect(editor.table).toEqual(output);
	});
	
	it("Should fill a partial region with other color", function() {
		var output;
		
		editor.drawFilledRectangle(1, 3, 2, 4, colorA);
		output = [["O", "O", "A", "A"], 
				  ["O", "O", "A", "A"], 
				  ["O", "O", "O", "O"], 
			  	  ["O", "O", "O", "O"], 
				  ["O", "O", "O", "O"]];
		expect(editor.table).toEqual(output);

		editor.drawHorizontalLine(3, 1, 3, colorB);
		output = [["O", "O", "A", "A"], 
				  ["O", "O", "A", "A"], 
				  ["B", "B", "B", "O"], 
			  	  ["O", "O", "O", "O"], 
				  ["O", "O", "O", "O"]];
		expect(editor.table).toEqual(output);
		
		editor.fillRegion(4, 2, colorC);
		output = [["O", "O", "A", "A"], 
				  ["O", "O", "A", "A"], 
				  ["B", "B", "B", "C"], 
			  	  ["C", "C", "C", "C"], 
				  ["C", "C", "C", "C"]];
		expect(editor.table).toEqual(output);
	});
});

//	var output = [
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"], 
//			["O", "O", "O", "O"]];