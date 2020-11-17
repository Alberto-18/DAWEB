/** EJERCICIO 6:
 * A partir de un array que contenga 15 notas entre 1 y 10, obtén otro en el que solo 
    se incluyan los aprobados.
 * Dados los arrays del punto anterior, busca la posición, en ambos, de la nota con 
    valor 5.5. Comprueba el valor devuelto en caso de que no exista dicha nota.
 * Dado el array original del primer punto, comprueba si todos son aprobados.
 * A partir de un array que contenga 12 palabras, obtén otro en el que solo se incluyan 
    las que tengan menos de 6 caracteres.
 * Dado el array original del punto anterior, recupera el primer elemento cuya última 
    letra sea una o.
 * Dado un array con 8 números de teléfono, busca si alguno termina en 3.
 */

function probarFunciones() {
    let arrayNotas = [1,2,5.5,6.7,4.5,10,9,8,7.75,3.25,5.5,5,4,6.5,8];
    let arrayPalabras = ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
    let arrayTelefonos = [65432876,69814300,632111754,62366833,69901355,65438977,675123099,67215097];
    
    //Array con solo los aprobados
    let arrayAprobados = arrayNotas.filter(nota => nota >= 5);

    //Posición e la nota con valor 5.5 en cada array
    let posicionArrayNotas = arrayNotas.findIndex(nota => nota == 5.5);
    let posicionArrayAprobados = arrayAprobados.findIndex(nota => nota == 5.5);

    //Comprobar si todos son aprobados
    let todosAprobados = arrayNotas.every(nota => nota >= 5);

    //Recuperar las palabras con menos de 6 letras
    let arrayPalabrasTamano = arrayPalabras.filter(palabra => palabra.length < 6);

    //Primer elemento que termina en o
    let palabraFinO = arrayPalabras.find(palabra => palabra[palabra.length-1]=="o");

    //Teléfono que acaba en 33
    let hayTelefono3 = arrayTelefonos.some(telefono => {
        let numTelefono = telefono.toString();
        return (numTelefono[numTelefono.length-1] == "3");
    });
}