var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2],function(error,files){
	files.forEach(function(file){

	var ext = "."+process.argv[3];
	if(ext == path.extname(file))
		console.log(file);
});
})