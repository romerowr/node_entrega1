//hay que crear este archivo desde la terminal 
//con     npm init          en la carpeta de operacions!!
var pi, suma, resta, division, multi;

	exports.pi=function(){
		pi=3.1416;
	};

	exports.suma=function(num1, num2){
		suma=num1+num2;
	};

	exports.resta=function(num1, num2){
		resta=num1-num2;
	};

	exports.dividir=function(num1, num2){
		division=num1/num2;
	};

	exports.multiplicar=function(num1, num2){
		multi=num1*num2;
	};

	exports.getInfo=function(){
		return{
			pi: pi,
			suma: suma,
			resta: resta,
			division: division,
			multi: multi
		};//con la llave se cierra lo de arriba
	};