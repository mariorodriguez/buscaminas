import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { CeldaComponent } from './celda/celda.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoComponent,
    CeldaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
