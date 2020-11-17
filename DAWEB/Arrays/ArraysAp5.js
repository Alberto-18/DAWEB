function iniciarCalculo(){
    let resultado = 0;
    let funcion= "";

    resultado = calcularCubo(numero);
    console.log("1. El cubo de " + numero + " es: " + resultado);
    funcion = function(num) {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("2. El cubo de " + numero + " es: " + resultado);
    funcion = (num) => {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("3. El cubo de " + numero + " es: " + resultado);
    funcion = num => num * num * num;
    resultado = funcion(numero);
    console.log("4. El cubo de " + numero + " es: " + resultado);
}

function calcularCubo(numero) {
    return numero * numero * numero;
}