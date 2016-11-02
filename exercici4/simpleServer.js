var http=require('http');

var servidor=http.createServer(function handleRequest(request, response){
	response.writeHead(200, {'Content-T':'text/plain'});
	response.write('<h1>Benvinguts al NODE</h1>');/*al posar localhost:3000 surtira aixo*/
	response.end();
});

servidor.listen(3000);
console.log('Connexió establerta');/*aixo surtira a la terminal*/