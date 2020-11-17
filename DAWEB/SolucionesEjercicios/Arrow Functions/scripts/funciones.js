function inicio(numEjercicio) {
    switch (numEjercicio) {
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        case 4:
            ejercicio4();
            break;
        case 5:
            ejercicio5();
            break;
        case 6:
            ejercicio6();
            break;
        case 7:
            ejercicio7();
            break;
        default:
            console.log("Ejercicio no implementado");
    }
}

/**EJERCICIO 1: La aplicación pedirá dos números por pantalla y mostrará, 
 * en una alerta, el resultado de sumarlos. */
function ejercicio1() {
    const numero1 = Number(prompt("Introduzca un número"));
    const numero2 = Number(prompt("Introduzca otro número"));
    const suma = (numero1, numero2) => alert(numero1 + numero2);

    suma(numero1, numero2);
}

/**EJERCICIO 2: Se pedirá al usuario que introduzca su edad y se mostrará por pantalla:
        a.	“Lo siento, aún no puedes votar” si es menor de edad.
        b.	“Bienvenido, puedes ejercer tu derecho al voto” en caso contrario.
 */
function ejercicio2() {
    const edad = Number(prompt("¿Cuántos años tiene?"));
    const puedeVotar = edad => {
        (edad > 18 ? alert("Bienvenido, puedes ejercer tu derecho al voto") : alert("Lo siento, aún no puedes votar"));
    };

    puedeVotar(edad);
}

/**EJERCICIO 3: Reescribe la siguiente función con funciones flecha:
            function preguntar(pregunta, si, no) {
                if (confirm(pregunta)) si();
                else no();
            }
            
            preguntar(
                "¿Estás de acuerdo?",
                function() { alert("El proceso continúa"); },
                function() { alert("Has cancelado el proceso"); }
            );
*/
function ejercicio3() {
    const si = () => alert("El proceso continúa");
    const no = () => alert("Has cancelado el proceso");
    const preguntar = (pregunta, si, no) => { (confirm(pregunta) ? si() : no()); };

    preguntar("¿Estás de acuerdo?", si, no);
}

/**EJERCICIO 4: Pasar de grados Celsius a grados Fahrenheit un valor que 
 * introduzca el usuario. */
function ejercicio4() {
    const gradosC = Number(prompt("Introduce temperatura en grados C"));
    const conversor = (gradosC) => {
        const gradosF = (gradosC * (1.800)) + 32;
        alert(gradosC + " grados Celcius son " + gradosF + " grados Fahrenheit");
    };

    conversor(gradosC);
}

/**EJERCICIO 5: A partir de un número cualquiera, se mostrará en un alert 
 * la tabla de multiplicar del mismo.*/
function ejercicio5() {
    const numero = Number(prompt("Introduce un número"));
    const calcularTabla = (numero) => {
        let tabla = "La tabla del " + numero + " es:\n";
        for (let i = 1; i <= 10; i++) {
            tabla = tabla + numero + "*" + i + " = " + (numero * i) + "\n";
        }
        alert(tabla);
    };
    calcularTabla(numero);
}

/**EJERCICIO 6: Calcular la media de los valores de un array. */
function ejercicio6() {
    const arrayNumeros = [3, 6, 27, 2, 89];
    const media = (array) => {
        let resultado = 0;
        for (let i = 0; i < array.length; i++) {
            resultado = resultado + array[i];
        }
        alert("La media de " + array + " es:\n" + (resultado / array.length));
    };

    media(arrayNumeros);
}

/**EJERCICIO 7: A partir de dos palabras introducidas por el usuario, 
 * informar a través de un alert de que palabra tiene más letras. */
function ejercicio7() {
    const palabra1 = prompt("Introduce una palabra");
    const palabra2 = prompt("Introduce otra palabra");
    const palabraMayor = (palabra1, palabra2) => {
        if (palabra1.length > palabra2.length) {
            alert(palabra1 + " tiene mas letras que " + palabra2);
        } else if (palabra1.length < palabra2.length) {
            alert(palabra2 + " tiene mas letras que " + palabra1);
        } else {
            alert(palabra1 + " tiene el mismo número de letras que " + palabra2);
        }
    };

    palabraMayor(palabra1, palabra2);
}