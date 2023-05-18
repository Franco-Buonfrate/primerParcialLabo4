import { Pais } from "./pais";

export class Producto {
  decripcion : string;
  codigo : number;
  precio : number;
  stock:number;
  pais: string;
  cometible:boolean;
  objetoPais: Pais;

  constructor(
    decripcion : string,
  codigo : number,
  precio : number,
  stock:number,
  pais: string,
  cometible:boolean,
  objetoPais: Pais,
  ) {
    this.decripcion = decripcion;
    this.codigo = codigo;
    this.precio = precio;
    this.stock = stock;
    this.pais = pais;
    this.cometible = cometible;
    this.objetoPais = objetoPais;
  }
}
