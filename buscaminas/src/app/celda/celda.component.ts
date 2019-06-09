import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Celda } from '../entidades/celda';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {
  @Input() celda: Celda;
  @Output() celdaClick: EventEmitter<Celda> = new EventEmitter();
  @Output() celdaMarca: EventEmitter<Celda> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCeldaClick(){
    this.celdaClick.emit(this.celda);
  }

  onCeldaMarca(){
    this.celdaMarca.emit(this.celda);
  }

}
