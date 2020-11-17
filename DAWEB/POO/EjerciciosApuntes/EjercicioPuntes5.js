class Fecha{
    constructor(dia, mes, año){
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    static getFechaActual(){
            var fecha = new Date();
            return new Fecha();
    }
    toString;
}