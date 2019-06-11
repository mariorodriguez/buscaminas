import { Component, OnInit } from '@angular/core';
import { Juego, EstadoJuego } from '../entidades/juego';
import { UtilService } from '../servicios/util.service';
import { Celda } from '../entidades/celda';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego: Juego;
  filas: any[];
  estadoJuego$: Observable<EstadoJuego>;
  suscripcionEstadoJuego: any;

  constructor(private utilService: UtilService) {
    this.juego = new Juego();
    this.estadoJuego$ = this.juego.suscribeEstadoJuego();
    this.suscripcionEstadoJuego = this.estadoJuego$.subscribe(dato => {
      console.log(dato);
      if(dato == EstadoJuego.Perdido)
        alert("Ups, Explotó una bomba, perdiste");
    })
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

  onCeldaClick(celda: Celda){
    console.log("juegoComponent event celda click");
    console.log(celda);
    this.juego.DestaparCelda(celda);
  }


}
