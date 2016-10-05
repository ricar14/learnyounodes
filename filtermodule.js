var fs = require('fs');
var path = require('path');

module.exports = function(directorio, extension, callback) {
fs.readdir(directorio, function(error, files) {
	var ficherosFiltrados = Array();
	if (error) {
		return callback(error);
	} 
		files.forEach(function(file) {
			var ext = "." + extension;
			if (ext == path.extname(file)) {
				ficherosFiltrados.push(file)
			}

		});
	callback(null, ficherosFiltrados);

})
}