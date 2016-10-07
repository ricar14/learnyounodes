 var http = require('http');
 var bl = require('bl');
 var respuesta = Array();
 var contador = 0;

 function escribirRespuestas() {
 	for (var i = 0; i < 3; i++) {
 		console.log(respuesta[i]);
 	}

 }

 function peticion(index) {
 	http.get(process.argv[2 + index], function(res) {
 		res.pipe(bl(function(error, data) {

 			if (error) {
 				return console.log("Ha habido un error: " + error);
 			} else {

 				var x = data.toString();
 				// console.log('===================', x.length, '===================');
 				// console.log(x);
 				respuesta[index] = x;
 				contador++;
 				if (contador === 3) {
 					escribirRespuestas();
 				}
 			}

 		}))
 	}).on('error', function(e) {
 		console.log("Got error: " + e.message);
 	});
 }

 for (var i = 0; i < 3; i++) {
 	peticion(i);
 }