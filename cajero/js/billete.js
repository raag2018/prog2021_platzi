class Billete{
	constructor(valor, cantidad){
		this.valor = valor;
		this.cantidad = cantidad;
	}
}
var atm = [];
atm.push(new Billete(100,5));
atm.push(new Billete(50,10));
atm.push(new Billete(20,30));
atm.push(new Billete(10,10));
atm.push(new Billete(5,5));
contar();
var div = 0;
var papeles = 0;
var entregado = [];
var dinero = 0;
var retirar = document.getElementById('retirar');
var p = document.getElementById('result');
retirar.addEventListener('click', entregarDinero);
function entregarDinero(){
	var t = document.getElementById('dinero');
	dinero = parseInt(t.value);
	if(total >= dinero){
	for (var bi of atm) {
		if(dinero > 0){
			div = Math.floor(dinero / bi.valor);
			if(div > bi.cantidad){
				papeles = bi.cantidad;
			}else{
				papeles = div;
			}
			for(var i = 0; i < papeles; i++){
				entregado.push(new Billete(bi.valor, papeles));
			}
			dinero -= (bi.valor * papeles);
			console.log(dinero);
			console.log(papeles);
		}
	}
	if(dinero > 0){
			p.style.color = 'blue';
				p.innerHTML += e.cantidad + ' billetes de $  ' + e.valor + '<br />';
			
	}else{
		for (var e of entregado) {
			if(e.cantidad > 0){
				p.style.color = 'blue';
				p.innerHTML += e.cantidad + ' billetes de $  ' + e.valor + '<br />';
			}
		}
		contar();
	}
	}else{
		p.style.color = 'red';
		p.innerHTML = 'sin efectivo sufiente'; 
	} 	
}
function contar(){
	total = 0;
	for (var tot of atm) {
		total += (tot.valor * tot.cantidad);  
	}
	console.log(total);
}