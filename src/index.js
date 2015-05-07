var GraphicalEditor = require("./graphical-editor"),
	readline = require('readline');
	 
function usage() {
	console.log("Commands: ");
	console.log(" I M N            - Create a new M × N image.");
	console.log(" C                - Clear the table.");
	console.log(" L X Y C          - Colors the pixel (X, Y).");
	console.log(" V X Y1 Y2 C      - Draw a vertical segment between pixels (Y1, X) and (Y2, X).");
	console.log(" H X1 X2 Y C      - Draw a horizontal segment between (Y, X1) and (Y, X2).");
	console.log(" K X1 Y1 X2 Y2 C  - Draw a rectangle, between pixels (X1, Y1) and (X2, Y2)");
	console.log(" F X Y C          - Fill the region where the pixel (X, Y) belongs.");
	console.log(" S                - Show the current image.");
	console.log(" X                - Terminate the process.");
};

function parseCommand(command, params, editor, rl) {
	var commands = {
		"I": { 
			paramsLength: 2,
			command: editor.initialize
		},
		"C": { 
			paramsLength: 0,
			command: editor.clear
		},
		"L": { 
			paramsLength: 3,
			command: editor.drawPixel
		},
		"V": { 
			paramsLength: 4,
			command: editor.drawVerticalLine
		},
		"H": { 
			paramsLength: 4,
			command: editor.drawHorizontalLine
		},
		"K": { 
			paramsLength: 5,
			command: editor.drawFilledRectangle
		},
		"F": { 
			paramsLength: 3,
			command: editor.fillRegion
		},
		"S": { 
			paramsLength: 0,
			command: editor.show
		},
		"X": { 
			paramsLength: 0,
			command: function() { rl.close(); }
		} 
	};
	
	var commandConfig = commands[command];
	if (!commandConfig)
		return false;
	
	if (params.length < commandConfig.paramsLength)
		return false;
	
	return commandConfig.command; 
}

function run() {
	var rl = readline.createInterface({
  		input: process.stdin,
  		output: process.stdout,
  		terminal: false
	}),
	editor = new GraphicalEditor();
	
	
	rl.setPrompt('command> ');
	rl.prompt();
	rl.on('line', function(line) {
		var command = line[0],
			params = line.split(" ").splice(1, line.length);
		
		var commandFunction = parseCommand(command, params, editor, rl);
		if (!commandFunction) {
			usage();
		} else {
			commandFunction.apply(editor, params);
		}
		rl.prompt();
	}).on('close',function(){
	    process.exit(0);
	});
};
run();