window.onload = function() { // Aseguro que JavaScript se ejecutara despues de que la pagina se cargue por completo

    let contador = 0;

    function muestra() {
        console.log("click " + contador);

        contador++;
    }
    
    const enlace = document.querySelector("#enlace");
    
    enlace.addEventListener("click", muestra);

}