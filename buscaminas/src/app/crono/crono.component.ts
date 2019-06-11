import { Component, OnInit, Input } from '@angular/core';
import { UrlSegmentGroup } from '@angular/router';
import { Juego, EstadoJuego } from '../entidades/juego';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crono',
  templateUrl: './crono.component.html',
  styleUrls: ['./crono.component.css']
})
export class CronoComponent implements OnInit {
  hora: number = 0;
  minuto: number = 0;
  segundo: number = 0;
  crono: any;

  constructor() { 
    
  }

  ngOnInit() {
    this.Iniciar();
  }

  Iniciar(){
    let comp = this;
    setInterval(function(){
      if(comp.segundo == 60){
        comp.segundo = 0;
        comp.minuto++;
        if(comp.minuto == 60){
          comp.hora++;
          comp.minuto = 0;
        }
      }
      comp.segundo++;
    }, 1000);

  }

  Parar(){
    clearInterval(this.crono);
  }
}
