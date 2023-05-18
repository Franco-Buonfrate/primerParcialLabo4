import { Pais } from "./pais";

export class Repartidor {
  apellido : string;
  nombre : string;
  dni : number;
  fechaNac:string;
  pais: string;
  capacidad : number;
  objetoPais: Pais;
  
  constructor(
    apellido: string,
    nombre: string,
    dni: number,
    fechaNac: string,
    pais: string,
    capacidad: number,
    objetoPais : Pais
  ) {
    this.apellido = apellido;
    this.nombre = nombre;
    this.dni = dni;
    this.fechaNac = fechaNac;
    this.pais = pais;
    this.capacidad = capacidad;
    this.objetoPais = objetoPais;
  }
}
