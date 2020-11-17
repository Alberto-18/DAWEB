var idTimer = null;

function mostrarMensaje() {
    let contador = 3;
    console.log(idTimer);
    if (idTimer == null) {
        idTimer = setInterval(() => {
            console.log("Han pasado " + contador + " segundos");
            contador = contador + 3;
        }, 3000);
    } else {
        clearInterval(idTimer);
        idTimer = null;
    }
}