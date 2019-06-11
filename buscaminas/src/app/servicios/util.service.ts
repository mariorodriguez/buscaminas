import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  obtenerNroAleatorio(max: number){
    return Math.round(Math.random() * max);
  }

  maximo(a: number, b: number){
    if(a > b)
      return a;
    else
      return b;
  }

  minimo(a: number, b: number){
    if(a < b)
      return a;
    else
      return b;
  }
}
