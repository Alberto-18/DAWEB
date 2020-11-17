/** EJERCICIO 2:
 * Implementa una función que, dadas dos palabras introducidas por el usuario, indique 
    cuantas letras más tiene una que la otra. En caso de que tengan las mismas letras, 
    el mensaje será “Las dos palabras tienen el mismo número de letras”.
 */
function contarLetras() {
    let palabra1 = prompt("Introduce una palabra");
    let palabra2 = prompt("Introduce otra palabra");
    
    if (palabra1.length > palabra2.length) {
        alert(palabra1 + " tiene mas letras que " + palabra2);
    } else if (palabra1.length < palabra2.length) {
        alert(palabra2 + " tiene mas letras que " + palabra1);
    } else {
        alert("Las dos palabras tienen el mismo número de letras");
    }
}