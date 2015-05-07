var WhiteColor = "O";

var GraphicalEditor = function() {
	this.table = [];
	this.rows = 0;
	this.cols = 0;
};


GraphicalEditor.prototype.initialize = function (rows, cols) {
	validadeColumns(cols);
	validateRows(rows);
	
	this.rows = rows;
	this.cols = cols;
	this.table = [];
	for (var rowIndex = 0; rowIndex < rows; rowIndex++) {
		this.table[rowIndex] = [];
		for (var colIndex = 0; colIndex < cols; colIndex++) {
			this.table[rowIndex][colIndex] = WhiteColor;
		}
	}
};

GraphicalEditor.prototype.drawPixel = function (row, col, color) {
	var rowIndex = row - 1,
		colIndex = col - 1;
	this.table[rowIndex][colIndex] = color;
};

GraphicalEditor.prototype.clear = function () {
	this.initialize(this.rows, this.cols);
};

GraphicalEditor.prototype.drawVerticalLine = function(rowStart, rowFinish, col, color) {
	var rowIndexStart = rowStart - 1,
		rowIndexFinish = rowFinish - 1,
		colIndex = col - 1;
	
	for (var rowIndex = rowIndexStart; rowIndex <= rowIndexFinish; rowIndex++) {
		this.table[rowIndex][colIndex] = color;
	}
};

function validadeColumns(cols) {
	if (cols < 1) {
		throw new Error("Cols must be between 1 and M, M must be greather than 0");
	}
	return true;
}

function validateRows(rows) {
	if (rows < 1 || rows > 250) {
		throw new Error("Rows must be between 1 and N, N must be less than 250");
	}
	return true;
}

module.exports = GraphicalEditor;