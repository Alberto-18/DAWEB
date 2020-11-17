/** EJERCICIO 8:
 * Crea una página web que permita probar el ejemplo de Array.from. Incluirá:
    o 3 secciones con su atributo class= "titularNoticia". Estas secciones contendrán una 
        cabecera de una noticia cada una.
    o 2 secciones con otro atributo class. El contenido será un texto cualquiera.
    o Un botón que, al ser pulsado, desencadenará la ejecución de una función. 
    o Esta función mostrará un alert para cada elemento con class="titularNoticia" con el 
        texto que contenga, salvo que dicho texto incluya la cadena "tr" en alguna posición.
 */
function mostrarContenido() {
    let titulares = Array.from(document.getElementsByClassName("titularNoticia"));
    titulares.forEach(titular => {
        let cadena = titular.innerHTML; 
        if (!cadena.includes("tr")) {
            alert(cadena);
        }
    });
}