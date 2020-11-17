/*EJERCICIO 3*/
function foco() {           
    document.getElementById("nombre").focus();
}

function quitar(){
    document.getElementById("nombre").blur();
}

/*EJERCICIO 4*/
function elemento2() {
    var elemento = document.createElement("h2");
    var text = document.createTextNode("Lorem Ipsum de nuevo");
    var padre = document.getElementById("seccionTercera");
    var hijo = padre.firstElementChild;
    elemento.appendChild(text);
    padre.insertBefore(elemento, hijo);
}

function cambiarOrden(){
    elemento.appendChild();

}

function creaParrafo(){
    var div = document.createElement("div");
    var clon = document.cloneNode("true");

    var text = document.createTextNode("Lorem Ipsum de nuevo");
    var padre = document.getElementById("seccionTercera");
    var hijo = padre.firstElementChild;
    elemento.appendChild(text);
    padre.insertBefore(elemento, hijo);

    elementoAClonar.cloneNode(boolean);
    var nuevaLista = document.getElementById("nombre");
}

function eliminaFila(){
    document.elemento.removeChild(nuevaLista);

}