function agenda(titulo, inic){
	var _titulo=titulo;
	var _contenido=inic;

	return{
		titulo: function()	        {return _titulo;},
		meter:  function(nombre, tf){_contenido[nombre]=tf;},
		tf:     function(nombre)    {return _contenido[nombre];},
		borrar: function(nombre)	{delete _contenido[nombre];},
		toJSON: function()	        {return JSON.stringify(_contenido);},
		llistar:function()			{return JSON.stringify(_contenido);}//es exactamente lo mismo
	}
}

var amigos = agenda("Amigos",
			 {Pepe: 913278561,
			  Jose: 983291234
			 });

amigos.meter("Jesus",936592407);

var trabajo = agenda("Trabajo",
			{"Javier Garcia": 913278561,
			  "Jose Jimenez": 983291234
			});

console.log('Agenda: 					'+amigos.titulo());
console.log('Teléfono de Jesus: 		'+amigos.tf("Jesus"));
console.log('Teléfono de Jose: 			'+amigos.tf("Jose"));
amigos.borrar("Jose");
console.log('Tf de Jose borrado: 		'+amigos.tf("Jose"));
console.log();
console.log('Agenda: 					'+trabajo.titulo());
console.log('Tf de Javier Garcia: 		'+trabajo.tf("Javier Garcia"));
console.log('Trabajo: 			'+trabajo.toJSON());
console.log('LLISTAR: 			'+'AMIGOS: '+amigos.llistar()+'TRABAJO: '+trabajo.llistar());
