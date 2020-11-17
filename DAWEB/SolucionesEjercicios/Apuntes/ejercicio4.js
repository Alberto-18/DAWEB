/** EJERCICIO 4: 
 * Implementa una función que:
        o Pida por pantalla un número indeterminado de valores numéricos al usuario 
            separados por el carácter “/”.
        o Meta todos esos valores en un array.
        o Ordene el array de menor a mayor.
        o Muestre por pantalla al usuario una única cadena con todos los valores del array, 
            separados por el carácter “–“.
 */
function modificarArray(){
    let cadena = prompt("Introduce números separados por el caracter /");
    let arrayNumeros = cadena.split("/");
    arrayNumeros.sort(function(num1, num2) {
        if(Number(num1) > Number(num2)){
            return -1;
        } else {
            return 1;
        }
    });
    alert(arrayNumeros.join("-"));
}