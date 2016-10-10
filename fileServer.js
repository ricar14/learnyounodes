var http = require('http');
var fs = require('fs');
var bl = require('bl');

var server = http.createServer(function(req, res) {
	// manejar cada petición aquí.  
	var datos;

var fichero = fs.createReadStream(process.argv[3]);
fichero.pipe(res);
/* fichero.pipe(bl(function(error, data) {
		
		if (error) {
			return console.log("Ha habido un error: " + error);
		} else {
			datos = data;
				res.writeHead(200,
				'content-length': data.length,
				'content-type': 'text/plain'
			});

	res.write(datos);
	res.end();
*/
  });


	server.listen(process.argv[2], function() {
		console.log('Escuchando en el puerto: ', process.argv[2]);
	});