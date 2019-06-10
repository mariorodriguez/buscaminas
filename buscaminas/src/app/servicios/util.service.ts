import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  obtenerNroAleatorio(max: number){
    return Math.round(Math.random() * max);
  }
}
