/**EJERCICIO 1:
 * Implementa una función que cumpla con los siguientes requisitos: 
    a.	Al comienzo de la función se creará un array vacío.
    b.	Se solicitará al usuario un número que se incorporará, como valor numérico,
         al final del array creado. Este paso se repetirá hasta que el usuario introduzca 
         una cadena vacía.
    c.	Una vez terminada la introducción de datos, se ordenará el array, de forma numérica, 
         de menor a mayor.
    d.	Tras la ordenación, mostrar por pantalla el contenido del array.
 */
function rellenarArray() {
    let arrayNumeros = [];
    let cadena = "";
    do {
        cadena = prompt("Introduzca un número ");
        arrayNumeros.push(Number(cadena));
    } while (cadena != "");

    arrayNumeros.sort( (numero1,numero2) => {
        if (numero1 < numero2) {
            return -1;
        } else {
            return 1;
        }
    });
    alert(arrayNumeros);
}