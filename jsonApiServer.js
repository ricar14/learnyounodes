var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
	var objURL = url.parse(req.url, true)
	var fecha = new Date(objURL.query.iso)
	var objJSON

	if (objURL.pathname == '/api/parsetime') {

		var objJSON = {
			'hour': fecha.getHours(),
			'minute': fecha.getMinutes(),
			'second': fecha.getSeconds()
		}

	} else if (objURL.pathname == '/api/unixtime') {
		objJSON = {
			'unixtime': fecha.getTime()
		}

	} else {
		objJSON = {
			'error': 'No has elegido la opcion correcta'
		}
	}
	res.end(JSON.stringify(objJSON))
})

server.listen(process.argv[2], function() {
	console.log('Escuchando en el puerto: ', process.argv[2]);
})