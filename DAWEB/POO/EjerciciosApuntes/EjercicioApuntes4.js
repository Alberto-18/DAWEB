class Animal{

    getDireccion(){
        let varThis = this;
        return "Calle " + " " + datosDir();
        function datosDir(casa) {
            return varThis.direccion + " " + varThis.ciudad;
        }
    }   
}