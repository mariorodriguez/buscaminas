import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { CeldaComponent } from './celda/celda.component';
import { FilaComponent } from './fila/fila.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    CeldaComponent,
    FilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
