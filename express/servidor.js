var express = require('express');
var app = express();
app.get('/', inicio);
app.get('/cursos', cursos);
function inicio(peticion, resultado){
	resultado.send("es este el home");
}
function cursos(peticion, resultado){
	resultado.send("estos son los cursos ");
}
app.listen(80);