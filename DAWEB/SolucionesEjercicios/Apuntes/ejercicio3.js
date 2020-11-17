/**EJERCICIO 3: Actualiza la función del segundo punto del ejercicio 2 para que, 
 * tras realizar todos los cambios pedidos en el mismo, se ordene el array original resultante según 
 * el número de caracteres que tenga cada valor, de mayor a menor. */
function manipularYOrdenarElementosDeCostura() {
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

    //Ordenación
    elementosDeCostura.sort(function(elemento1, elemento2){
        if(elemento1.length > elemento2.length){
            return -1;
        } else {
            return 1;
        }
    });

    console.log(elementosDeCostura);
    console.log(primerosElementos);
    console.log(ultimosElementos);
}