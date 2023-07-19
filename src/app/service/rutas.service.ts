import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RutasService {
  private rutas: Rutas[] = [
    {
  origen: "Machala",
  destino: "Guayaquil",
  precio: 10,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Externo"
},{
  origen: "Machala",
  destino: "Pasaje",
  precio: 2,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "Santa Rosa",
  precio: 3,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "Huaquillas",
  precio: 5,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "El Guabo",
  precio: 1.50,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "La Ponse",
  precio: 7,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "Babahoyo",
  precio: 11,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Externo"
},{
  origen: "Machala",
  destino: "Puerto Inca",
  precio: 7.50,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Interno"
},{
  origen: "Machala",
  destino: "Duran",
  precio: 9,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Externo"
},{
  origen: "Machala",
  destino: "Jujan",
  precio: 10,
  descripcion: "Transporte seguro con aire acondicionado y baño",
  tipo:"Externo"
}
];
getRutas(){
  return this.rutas;
  
}
  getRuta(idx: number): Rutas{
    return this.rutas[idx];
  }
}
export interface Rutas{
  origen:string;
  destino:string;
  precio:number;
  descripcion:string;
  tipo:string;
}
