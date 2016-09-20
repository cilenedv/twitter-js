window.addEventListener("load", function() {
    var boton = document.getElementById("boton");
    var textArea = document.getElementById("texto");
    var contador=document.getElementById("contador");
    var caracteres = contador.innerHTML=140;
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        var texto = textArea.value;
        agregarMensaje(texto);
        textArea.value = "";
        contador.innerHTML=140;
        boton.disabled=true;
    });
    function agregarMensaje(texto) {
        var mensaje = document.createElement("div");
        mensaje.innerText = texto;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(mensaje, contenedor.childNodes[0]);
    }
    texto.addEventListener("keydown", function() {
        boton.disabled = false;
        var longitud = textArea.value.length;
        if(longitud <= caracteres) {
           contador.innerHTML = caracteres - longitud;
        } else {
            contador.innerHTML = caracteres - longitud;
        }
    });
});