var os=require('os');

console.log(os.freemem());

var vector = [1];
var numero = 5;

for(i=0;i<1000000;i++){
	vector.push(numero*i);
}

for(i=0;i<1000000;i++){
	console.log(vector[i]);
}

console.log(os.freemem());

//amb numeros petits no es nota la diferencia en el freemem()