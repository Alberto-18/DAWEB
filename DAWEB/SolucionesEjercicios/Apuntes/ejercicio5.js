/** EJERCICIO 5: 
 * Implementa una función que devuelva el cubo de un número pasado como parámetro. Defínela:
 *  de la forma habitual, 
 *  utilizando una función anónima,
 *  utilizando arrow function con retorno explícito y 
 *  utilizando arrow function de retorno implícito.
 */
function iniciarCalculo(){
    let resultado = 0;
    let funcion= "";
    const numero = Number(prompt("Introduce un número"));
    //Función con la estructura habitual
    resultado = calcularCubo(numero);
    console.log("1. El cubo de " + numero + " es: " + resultado);

    //Función anónima
    funcion = function(num) {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("2. El cubo de " + numero + " es: " + resultado);

    //Función flecha con retorno explícito
    funcion = (num) => {
        return num * num * num;
    };
    resultado = funcion(numero);
    console.log("3. El cubo de " + numero + " es: " + resultado);

    //Función flecha con retorno implícito
    funcion = num => num * num * num;
    resultado = funcion(numero);
    console.log("4. El cubo de " + numero + " es: " + resultado);
}

function calcularCubo(numero) {
    return numero * numero * numero;
}