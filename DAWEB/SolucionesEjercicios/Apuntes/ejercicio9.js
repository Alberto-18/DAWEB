/** EJERCICIO 9:
 * Partiendo de los arrays de notas y precios del ejercicio 7:
    o Haz copias de los mismos tanto directamente como a través de cualquier método de los 
        vistos en apartados anteriores.
    o Modifíca las copias y comprueba los casos en que los arrays son copias independientes 
        y los casos en que son referencias al mismo array.

 */
function copiarArrays() {
    let arrayNotas = [1,2,5.5,6.7,4.5,10,9,8,7.75,3.25,5.5,5,4,6.5,8];
    let arrayPrecios = [2.35,3,6.20,1.3,7.65,8,9.10,5.65,2.35,5,4.85,2.99];

    let copiaNotas = arrayNotas;
    let copiaNotasRef = arrayNotas.slice();
    let copiaPrecios = arrayPrecios;
    let copiaPreciosRef = arrayPrecios.slice();

    console.log("Notas original: " + arrayNotas);
    console.log("Notas copia: " + copiaNotas);
    console.log("Notas copia ref: " + copiaNotasRef);
    console.log("Precios original: " + arrayPrecios);
    console.log("Precios copia: " + copiaPrecios);
    console.log("Precios copia ref: " + copiaPreciosRef);

    console.log("***** DESPUÉS DE REALIZAR ALGUNOS CAMBIOS *****");
    copiaNotas[2] = 0;
    copiaNotasRef[3] = 10;
    console.log("Notas original: " + arrayNotas);
    console.log("Notas copia: " + copiaNotas);
    console.log("Notas copia ref: " + copiaNotasRef);

    copiaPrecios[7] = "Ahora soy una cadena";
    copiaPreciosRef[5] = "Yo también soy una cadena";
    console.log("Precios original: " + arrayPrecios);
    console.log("Precios copia: " + copiaPrecios);
    console.log("Precios copia ref: " + copiaPreciosRef);
}