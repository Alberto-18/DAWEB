/** EJERCICIO 5:
 * Implementa una función que saque por consola la serie de Fibonacci hasta un número dado. Los 
    números parecerán separados por un espacio en blanco.
    Por ejemplo, si el usuario introduce el 55, la salida será: "Serie de Fibonacci: 0 1 1 2 3 5 8 13 21 34 55"
 */
function calcularFibonacci() {
    let numeroTope = Number(prompt("Introduce un número "));
    let serie = [0,1];
    let calculo = 1;
    
    while(calculo <= numeroTope) {
        serie[serie.length] = calculo;
        calculo = serie[serie.length -1] + serie[serie.length -2];
    }
    alert("Serie de Fibonacci: " + serie.join(" "));
}