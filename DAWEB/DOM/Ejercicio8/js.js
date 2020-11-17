let idTimeout=setTimeout(function() {
    alert('Saludos');
}, 5000, 7000);

function myFunction1(){
    let i=1;
    let idInterval=setInterval(function() {
    alert('Interval cada 3 seg. Ejecución nº: '+ i++);
        if (i==5) {
            clearInterval(idInterval);
            alert('La función se ha ejecutado 5 veces');
        }
    }, 3000);

}

/* Ejercicio9 */
function myFunction2(){
    //Se crea una ventana nueva con toolbar, de tamañan 500*300
    //sin barras de scroll y a 10px del margen superior y a 20 px del margen izquierdo de la pantalla.
    let ventanaNueva = window.open("", "pop-up", "toolbar=no,width=500,height=300,menubar=false,scrollbar=false,screenX=10,screenY=20");
    
    //Boton dentro de la ventana emergente
    ventanaNueva.document.write("<button onclick= ventanaNueva.close> Click </button>");
   
}





    