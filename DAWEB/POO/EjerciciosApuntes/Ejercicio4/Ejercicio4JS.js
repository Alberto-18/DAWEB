class Animal{
    constructor(especie, habitat, edadMaxAprox){
        this.especie = especie;
        this.habitat = habitat;
        this.edadMaxAprox = edadMaxAprox;
    }

    getAnimal(){
        return "Especie: " + this.especie + "Habitat: " + this.habitat + "Edad máxima aproximada: " + this.edadMaxAprox;
    }

}

class AnimalDomestico extends Animal {
    constructor(especie, habitat, edadMaxAprox, nombre, identificador, vacunado){
        super(especie, habitat, edadMaxAprox);
        this.nombre = nombre;
        this.identificador = identificador;
        this.vacunado = vacunado;
    }

    getAnimalDomestico(){
       return "Nombre: " + this.nombre + "Identificador: " + this.identificador + "Vacuno: " + this.vacunado + super.getAnimal();
    }
}

class AnimalSalvaje extends Animal {
   constructor(especie, habitat, edadMaxAprox, cautivo, peligroExtincion){
       super(especie, habitat, edadMaxAprox);
       this.cautivo = cautivo;
       this.peligroExtincion = peligroExtincion;
   }

   getAnimalSalvaje(){
       return "Cautivo" + this.cautivo + "En peligro de extinción" + this.peligroExtincion + super.getAnimal();
   }
   
}
