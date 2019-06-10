import { Component, OnInit } from '@angular/core';
import { Juego } from '../entidades/juego';
import { UtilService } from '../servicios/util.service';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego: Juego;
  filas: any[];

  constructor(private utilService: UtilService) {
    this.juego = new Juego();
   }

  ngOnInit() {
    //this.juego.GenerarTablero();
    this.extraeFilas();
  }

  extraeFilas(){
    this.filas = [];
    this.filas.push({nombre: "mario"})
    this.filas.push({nombre: "juan"})

  }


}
