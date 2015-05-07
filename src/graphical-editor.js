var WhiteColor = "O";

var GraphicalEditor = function() {
	this.table = [];
	this.rows = 0;
	this.cols = 0;
};


GraphicalEditor.prototype.initialize = function (rows, cols) {
	this.validadeSize(rows, cols);
	
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

	this.validateIndex(rowIndexStart, colIndex);
	this.validateIndex(rowIndexFinish, colIndex);
	
	for (var rowIndex = rowIndexStart; rowIndex <= rowIndexFinish; rowIndex++) {
		this.table[rowIndex][colIndex] = color;
	}
};

GraphicalEditor.prototype.drawHorizontalLine = function(row, colStart, colFinish, color) {
	var rowIndex = row - 1,
		colIndexStart = colStart - 1,
		colIndexFinish = colFinish - 1;
		
	this.validateIndex(rowIndex, colIndexStart);
	this.validateIndex(rowIndex, colIndexFinish);
	
	for (var colIndex = colIndexStart; colIndex <= colIndexFinish; colIndex++) {
		this.table[rowIndex][colIndex] = color;
	}
};

GraphicalEditor.prototype.validateIndex = function(row, col) {
	if (row < 1 || row > this.rows - 1) {
		throw new Error("Row must be between 1 and " + this.rows);
	}
	
	console.log(this.rows);
	if (col < 1 || col > this.cols - 1) {
		throw new Error("Col must be between 1 and " + this.cols);
	}
	
	return true;
};

GraphicalEditor.prototype.validadeSize = function(rows, cols) {
	if (rows < 1 || rows > 250) {
		throw new Error("Rows must be between 1 and N, N must be less than 250");
	}

	if (cols < 1) {
		throw new Error("Cols must be between 1 and M, M must be greather than 0");
	}
	return true;
};

module.exports = GraphicalEditor;