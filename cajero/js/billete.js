class Billete{
	constructor(valor, cantidad){
		this.valor = valor;
		this.cantidad = cantidad;
	}
}
var textnode; 
var atm = [];
var entregado = [];
atm.push(new Billete(50,10));
atm.push(new Billete(20,20));
atm.push(new Billete(10,20));
var div = 0;
var papeles = 0;
var dinero = 0;
var retirar = document.getElementById('retirar');
var p = document.getElementById('result');
retirar.addEventListener('click', entregarDinero);
function entregarDinero(){
	var t = document.getElementById('dinero');
	dinero = parseInt(t.value);
	for (var bi of atm) {
		if(dinero > 0){
			div = Math.floor(dinero / bi.valor);
			if(div > bi.cantidad){
				papeles = bi.cantidad;
			}else{
				papeles = div;
			}
			entregado.push(new Billete(bi.valor, papeles));
			dinero -= (bi.valor * papeles);
		}
	}
	if(dinero > 0){
		p.style.color = 'red';
		p.innerHTML = 'sin efectivo sufiente';  
	}else{
		for (var e of entregado) {
			p.style.color = 'blue';
			p.innerHTML += e.cantidad + ' billetes de $  ' + e.valor + '<br />';
		}
	}
	
}