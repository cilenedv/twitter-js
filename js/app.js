window.addEventListener("load", function() {
		var boton=document.getElementById("boton");
		boton.addEventListener("click",function(){
			var txt=document.getElementById("txt").value;
			document.getElementById("txt").value="";
			var mensaje=document.createElement("p");
			mensaje.innerText=txt;
			var contenedor=document.getElementById("contenedor");
			contenedor.insertBefore(mensaje,contenedor.childNodes[0]);
	});

});


