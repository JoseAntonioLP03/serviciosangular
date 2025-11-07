export class Persona{
    //Para relizar el binding automatico
    //Las propiedades deben llamarse como el JSON
    constructor(
        public idPersona:number,
        public Nombre:string,
        public Email:string,
        public Edad:number,
    ){ }
}