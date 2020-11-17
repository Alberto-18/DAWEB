/** EJERCICIO 7:
 * A partir de un array que contenga 15 notas entre 1 y 10, obtén la media de la clase.
 * A partir de un array que contenga 15 notas entre 1 y 10, obtén la nota más alta.
 * A partir de un array que contenga 12 precios de una lista de la compra, obtén el gasto 
    total de la misma.
 * A partir del array del punto anterior, obtén otro array con los precios con IVA incluido. 
    Aplica a todos un 10% de IVA.
 */

 function probarMapYReduce() {
    let arrayNotas = [1,2,5.5,6.7,4.5,10,9,8,7.75,3.25,5.5,5,4,6.5,8];
    let arrayPrecios = [2.35,3,6.20,1.3,7.65,8,9.10,5.65,2.35,5,4.85,2.99];

    //Media de la clase
    let sumaNotas = arrayNotas.reduce((notaAcumulada,notaATratar) => notaAcumulada + notaATratar);
    let notaMedia = sumaNotas/arrayNotas.length;

    //Nota mas alta
    let notaMasAlta = arrayNotas.reduce((notaAnterior,notaActual) => notaAnterior > notaActual ? notaAnterior : notaActual);

    //Gasto total compra
    let totalAPagar = arrayPrecios.reduce((precioAcumulado,precioActual) => precioAcumulado + precioActual);

    //IVA incluido
    let arrayConIVA = arrayPrecios.map(precio => precio * 1.10);

 }