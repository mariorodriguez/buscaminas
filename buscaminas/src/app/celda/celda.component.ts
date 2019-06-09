import { Component, OnInit, Input } from '@angular/core';
import { Celda } from '../entidades/celda';

@Component({
  selector: 'app-celda',
  templateUrl: './celda.component.html',
  styleUrls: ['./celda.component.css']
})
export class CeldaComponent implements OnInit {
  @Input() celda: Celda;
   
  constructor() { }

  ngOnInit() {
  }

}
