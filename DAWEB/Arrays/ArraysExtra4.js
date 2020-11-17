function imprimir() {

        let cadenaP = "";
        let cadenaI = "";
        let numero = Number(prompt("Introduce un número"));

    for (let i = 0; i <= numero; i=i+2) {
        cadenaP = cadenaP + i + " ";

    }
    
    for (let j = 1; j <= numero; j=j+2) {
        cadenaI = cadenaI + j + " ";

    }

    console.log("Pares: " + cadenaP);
    console.log("Impares: " + cadenaI);
    
}