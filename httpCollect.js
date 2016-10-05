 var http = require('http');
 var bl = require('bl');
 http.get(process.argv[2], function(res) {
 	res.pipe(bl(function(error, data) {

 		if (error) {
 			return console.log("Ha habido un error: " + error);
 		} else {
 			var x = data.toString();
 			console.log(x.length);
 			console.log(x);
 		}

 	}))
 }).on('error', function(e) {
 	console.log("Got error: " + e.message);
 });