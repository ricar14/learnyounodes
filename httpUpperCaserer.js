   var map = require('through2-map');
   var http = require('http');
   var bl = require('bl');

   var server = http.createServer(function(req, res) {
   	if (req.method === 'POST') {
   		req.pipe(map(function(chunk) {
   			return chunk.toString().toUpperCase();
   		})).pipe(res);
   	} else {
   		return res.end('solo se admiten peticiones POST\n');
   	}
   })
   server.listen(process.argv[2], function(){
   	console.log('Escuchando en el puerto: ', process.argv[2])
   })