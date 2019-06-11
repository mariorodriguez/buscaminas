import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Celda } from '../entidades/celda';

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
    console.log(this.celda);
  }

  onCeldaMarca(){
    this.celdaMarca.emit(this.celda);
    console.log("marca");
  }

}
