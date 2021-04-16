var imagenes = [];
imagenes['cauchin'] = './img/vaca.png';
imagenes['pokacho'] = './img/pollo.png';
imagenes['tocinauro'] = './img/cerdo.png';

var coleccion = [];
coleccion.push(new Pakiman('cauchin',100,30));
coleccion.push(new Pakiman('pokacho',80,50));
coleccion.push(new Pakiman('tocinauro',120,40));
for(var pokachin of coleccion){
	pokachin.mostrar();
}