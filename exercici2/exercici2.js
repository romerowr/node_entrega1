var operation=require('./operacions');

operation.pi();
operation.suma(1,2);
operation.resta(5,100);
operation.dividir(2,50);
operation.multiplicar(2,6);

/*hay que tener en cuenta que el primer numero
en cada una de las funciones, sera al cual se efectuara
la multiplicacion, division, suma, resta del siguiente numero.
por lo tanto, si el primer numero de la division es menor al segundo
el resultado en la terminal dara en decimales y en caso de resta dara negativo*/

console.log(operation.getInfo());