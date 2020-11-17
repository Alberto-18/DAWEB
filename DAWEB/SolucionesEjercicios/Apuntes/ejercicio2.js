/**EJERCICIO 2:
 * Implementa una función que incluya en un array la siguiente lista: tela, bies, hilo, 
    tijeras, máquina de coser, botón. Después, utilizando las funciones vistas: 
    o Elimina el bies. Muestra el array por consola.
    o Añade, entre hilo y tijeras, hilo torzal. Muéstralo de nuevo por consola.
    o Quita tijeras y sustitúyelas por  cúter rotatorio y mesa de corte. Una vez mas, 
    muestra el array por consola.
    o Crea, a partir del primer array, dos nuevos donde el primero incluya los tres 
    primeros elementos del original y el segundo del cuarto al sexto.
    o En el segundo de los nuevos array creados:
         Incluye, en la primera posición, remalladora.
         Incluye, en la penúltima posición, cinta métrica.
    o Muestra por consola el contenido de los tres arrays.
 */
function manipularElementosDeCostura() {
    let elementosDeCostura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];
    elementosDeCostura.splice(1,1);
    console.log(elementosDeCostura);
    elementosDeCostura.splice(2,0,"hilo torzal");
    console.log(elementosDeCostura);
    elementosDeCostura.splice(3,1,"cúter rotatorio", "mesa de corte");
    console.log(elementosDeCostura);
    let primerosElementos = elementosDeCostura.slice(0,3);
    let ultimosElementos = elementosDeCostura.slice(3, 6);
    ultimosElementos.unshift("remalladora");
    ultimosElementos.splice((ultimosElementos.length-1),0, "cinta métrica");
    console.log(elementosDeCostura);
    console.log(primerosElementos);
    console.log(ultimosElementos);
}