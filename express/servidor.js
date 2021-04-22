//para importar modulos es con require
var hhtp = require('http');//modulo de nucleo
//permite ejecutar js del lado del servidor
var server = http/createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('<html><body>hola</body></html>');
	response.end();
});

server.listen(80);

/*console.log("hello word");
function sum(n1,n2){
	return n1 + n2;
}
console.log('sum> ' + sum(3,6));*/