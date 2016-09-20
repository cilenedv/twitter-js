window.addEventListener("load", function() {
    var boton = document.getElementById("boton");
    var textArea = document.getElementById("texto");
    textArea.addEventListener('keydown', autosize);
    var contador=document.getElementById("contador");
    var caracteres = contador.innerHTML=140;
    boton.addEventListener("click", function(e) {
        e.preventDefault();
        var texto = textArea.value;
        agregarMensaje(texto);
        textArea.value = "";
        contador.innerHTML=140;
        boton.disabled=true;
        contador.classList.remove("color-120");
        contador.classList.remove("color-130");
    	resize();
         mostrarHora();
    });
    function agregarMensaje(texto) {
        var mensaje = document.createElement("div");
        mensaje.innerText = texto;
        var contenedor = document.getElementById("contenedor");
        contenedor.insertBefore(mensaje, contenedor.childNodes[0]);
    }
    function autosize(){
        var el = this;
        setTimeout(function(){
            el.style.cssText = 'height:auto; padding:0';
            el.style.cssText = 'height:' + el.scrollHeight + 'px';
            },0);
    }
    function resize() {
       textArea.style.cssText = "height: auto";
   }
   function mostrarHora() {
       var fecha = new Date();
       var hora = fecha.getHours();
       var minuto = fecha.getMinutes();
           if(minuto < 10) {
               minuto = "0" + minuto;
           }
       var horaImprimible = hora + " : " + minuto;

       var horario = document.createElement("span");
       horario.innerText = horaImprimible;
       var contenedor = document.getElementById("contenedor");
       contenedor.insertBefore(horario, contenedor.childNodes[1]);
   }
    texto.addEventListener("keydown", function() {
        boton.disabled = false;
        var longitud = textArea.value.length+1;
        if(longitud <= caracteres) {
           contador.innerHTML = caracteres - longitud;
        } else {
            contador.innerHTML = caracteres - longitud;
        }
        if(longitud > caracteres) {
            boton.disabled = true;
        }
        if(longitud > 120) {
            contador.classList.add("color-120");
        }
        if(longitud > 130) {
            contador.classList.add("color-130");
            
        }
    });
});