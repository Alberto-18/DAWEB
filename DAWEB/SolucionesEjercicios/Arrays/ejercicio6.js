/** EJERCICIO 6:
 * Implementa una función que:
        a.	Pida por pantalla números separados por el carácter $.
        b.	Con esos números cree un array de enteros.
        c.	Cree un array a partir del primero donde, en cada posición, se almacene el valor que se encuentra en la misma posición del otro array mas el valor siguiente. Para el último valor, se le sumará el valor de la primera. Por ejemplo:
                Array1 = [1,2,3,4,5]
                Array2 será: [3,5,7,9,6]
        d.	Calcular la media del primer array y sacar el número más alto del segundo. 
            Mostrarlo por consola
        e.	Concatenar ambos arrays, ordenar el resultante de menor a mayor y mostrarlo por pantalla como
            una cadena separando los números con el símbolo *.
 */
function manipularArrays() {
    let cadena = "";
    let arrayNumeros1 = [];
    let arrayNumeros2 = [];
    let arrayFinal = [];
    let media = 0;
    let valorMayor = 0;
    
    cadena = prompt("Introduce una serie de números separados por el caracter $");
    arrayNumeros1 = cadena.split("$").map(Number);
    arrayNumeros2 = arrayNumeros1.map( (numero, indice, arrayNums) => {
        if (indice == arrayNums.length-1) {
            return numero + arrayNums[0];
        } else {
            return numero + arrayNums[indice+1];
        }
    });
    media = (arrayNumeros1.reduce((numAcumulado,numero) => numAcumulado + numero))/arrayNumeros1.length;
    valorMayor = arrayNumeros2.reduce((numAnterior,numActual) => numAnterior > numActual ? numAnterior : numActual);
    console.log("Media: " + media + " Valor mas alto: " + valorMayor);

    arrayFinal = arrayNumeros1.concat(arrayNumeros2);
    arrayFinal.sort((num1,num2) => num1 > num2 ? -1 : 1);
    alert("Valores finales: " + arrayFinal.join("*"));
}