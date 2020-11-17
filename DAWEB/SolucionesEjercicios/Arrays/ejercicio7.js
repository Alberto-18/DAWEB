function unirArrays() {
    let arrayDeArrays = [
        [1, 2, 3],
        ["1", "2", "3", "4"],
        [true, false,false],
        ["uno", "dos", "tres"]
    ];

    let arrayFinal = arrayDeArrays.reduce((elemAnt,elemAct) => elemAnt.concat(elemAct));
    //Recuerda que forEach no mofica el elemento por si misma, 
    //hay que hacer la modificación expresa y añadirla al array 
    arrayFinal.forEach( (elemento, i, array) => array[i] = elemento.toString() );
    arrayFinal.sort((cadena1, cadena2) => {
        if (cadena1.length > cadena2.length) {
            return -1;
        } else {
            return 1;
        }
    });
}