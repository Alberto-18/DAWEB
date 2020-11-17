let formulario = document. formulario;
let mismoFormulario = document.getElementById("idFormulario");


//Número de Telefono
function validarNumeros(event) {
    var permitidos = "0123456789";
    var codigoCaracter = event.charCode || event.keyCode;
    var caracter = String.fromCharCode(codigoCaracter);
    return permitidos.indexOf(caracter) != -1;

}


//CheckboxS
var elem = document.getElementById("0614");
alert(" Elemento: " + elem.value + "\n Seleccionado: " + elem.checked);
elem = document.getElementById("1420");
alert(" Elemento: " + elem.value + "\n Seleccionado: " + elem.checked);
elem = document.getElementById("2001");
alert(" Elemento: " + elem.value + "\n Seleccionado: " + elem.checked);


//Desplegable 
var elementos = document.getElementsByName("prep");
for(var i=0; i<elementos.length; i++) {
     alert(" Elemento: " + elementos[i].value + "\n Sel.: " + elementos[i].checked);
} 


//Area de texto
function maximoLetras(maxCaracteres) {
    var elemento = document.getElementById("textArea");
   
    if(elemento.value.length >= maxCaracteres ) {
        return false;
    }else {
        return true;
    }
}
   