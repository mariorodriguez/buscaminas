import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Celda, EstadoCelda } from '../entidades/celda';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {
  @Input() celda: Celda;
  @Output() celdaClick = new EventEmitter<Celda>();
  @Output() celdaMarca: EventEmitter<Celda> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCeldaClick(){
    this.celdaClick.emit(this.celda);
    
  }

  onCeldaMarca(){
    if(this.celda.estado != EstadoCelda.Bandera)
      this.celda.estado=EstadoCelda.Bandera;
    else
      this.celda.estado=EstadoCelda.Oculta;

    this.celdaMarca.emit(this.celda);
    
  }

}
