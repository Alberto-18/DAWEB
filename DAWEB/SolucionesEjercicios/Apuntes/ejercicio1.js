/** EJERCICIO 1:
 *  Implementa una función donde:
        o Primero se creará un array vacío. 
        o Después se pedirá al usuario, repetidamente, que introduzca un número(que podrá ser positivo, negativo o 0) y un nombre de persona.
        o Cada vez se preguntará al usuario si se va a añadir el valor indicado:
             Si acepta que se añada:
                • Si ha introducido un número positivo se incluye el nombre en el array en la posición indicada.
                • Si el número es negativo, se añadirá al final del array sin sobrescribir ninguno.
             Si no lo acepta:
                • Si el número es positivo eliminará el valor del elemento que se encuentre en la posición indicada ignorando el introducido.
                • Si es negativo, se eliminará el primero.
        o La ejecución terminará cuando, en lugar de un número,se introduzca una cadena.

*/
function pedirNombres() {
    let arrayNombres = [];
    let incluir = true;
    let nombre = "";
    let numero = 0;
    do {
        nombre = prompt("Introduce un nombre");
        numero = Number(prompt("Introduce la posición en la que incluir dicho nombre"));
        incluir = confirm("¿Estás seguro de incluir el nombre?");
        if (incluir) {
            if (numero >= 0) {
                arrayNombres[numero] = nombre;
            }
            if (numero < 0) {
                arrayNombres.push(nombre);
            }
        } else {
            if (numero > 0) {
                arrayNombres[numero] = "";
            }
            if (numero < 0) {
                arrayNombres.shift();
            }
        }
    } while (!isNaN(numero)); 
    console.log(arrayNombres);
}