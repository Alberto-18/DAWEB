function cargarInformacion() {
    window.name = "Ventana";
    let funcion = function() {
        //Se crea una ventana nueva son toolbar, de tamañan 500*300,sin barra de menú,
        //sin barras de scroll y a 300px del margen superior y a 300 px del margen izquierdo de la pantalla.
        let ventanaNueva = window.open("", "pop-up", "toolbar=no,width=500,height=300,menubar=false,scrollbar=false,screenX=300,screenY=300");
        //se añade un elemento de tipo p a la nueva ventana que incliurá el nombre de la ventana que la ha creado
        ventanaNueva.document.write("<p>Soy un pop-up creado por " + ventanaNueva.opener.name + "</p>");
        //tras 5 segundos se modificará el tamaño de la página nueva
        setTimeout(() => {
            ventanaNueva.resizeTo(400, 150);
        }, 5000);
    };

    mostrarInfo();
    //tras 5 segundos llama a la función crearPagina()
    setTimeout(funcion, 5000);
}

function mostrarInfo() {
    let infoVentana = "";
    infoVentana += "<br> Nombre de la ventana: " + window.name;
    infoVentana += "<br> Ancho/Alto externos: " + window.outerWidth + "/" + window.outerHeight;
    infoVentana += "<br> Ancho/Alto internos: " + window.innerWidth + "/" + window.innerHeight;
    infoVentana += "<br> Scrolls: " + window.pageXOffset + "/" + window.pageYOffset;
    infoVentana += "<br> Distancia desde la esquina superior izquierda: " + window.screenX + "/" + window.screenY;

    (document.getElementById("parrafo")).innerHTML = infoVentana;
}
