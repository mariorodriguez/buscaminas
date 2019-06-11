import { Celda, EstadoCelda } from './celda';
import { UtilService } from '../servicios/util.service';
import { disableDebugTools } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';

export enum EstadoJuego{
    Inicio = 0,
    Jugando = 1,
    Ganado = 2,
    Perdido = 3
}

export class Juego {
    estado: EstadoJuego = EstadoJuego.Inicio;
    celdasDestapadas: number = 0;
    tablero:Celda [][];
    filas: number = 10;
    columnas: number = 10;
    private utilService: UtilService = new UtilService();
    private estadoSubject = new Subject<EstadoJuego>();
    public estadoObservable = this.estadoSubject.asObservable();

    constructor(){
        this.IniciarJuego();
    }

    IniciarJuego(){
        this.celdasDestapadas = 0;
        this.estado = EstadoJuego.Jugando;
        this.GenerarTablero();
        this.Minar();
    }    

    GenerarTablero(){
        let fila = 0
        let col = 0;
        this.tablero = [];
        for(fila=0; fila<this.filas; fila++){
            this.tablero[fila] = [];
            for(col=0; col<this.columnas; col++){
                this.tablero[fila][col] = new Celda(fila, col);
            }   
        }

        console.log("Se generó tablero");
        console.log(this.tablero);
    }

    Minar(){
        let minas: number = 0
        let fila: number = 0
        let col: number = 0
        let celda: Celda;

        while(minas<10){
            do{
                fila = this.utilService.obtenerNroAleatorio(this.filas-1); 
                col = this.utilService.obtenerNroAleatorio(this.columnas-1); 
                celda = this.tablero[fila][col];
            }
            while(celda.minada == true)
            celda.minada = true;
            minas++;
            
        }
        console.log("Se colocaron minas.");
        console.log(this.tablero);
    }

    DestaparCelda(celda: Celda){
        let fila: number;
        let col: number;
        let fila2: number;
        let col2 : number;
        //let celda: Celda;
        let filaMin: number;
        let filaMax: number;
        let colMin: number;
        let colMax: number;
        let celda2: Celda;

        fila = celda.nroFila;
        col = celda.nroColumna;

        //celda = this.tablero[fila][col];
        if(celda.minada == true){
            console.log("Perdiste - Fin del juego")
            this.estadoSubject.next(EstadoJuego.Perdido);
        }

        if(celda.estado == EstadoCelda.Oculta || celda.estado == EstadoCelda.Dudosa){
            celda.estado = EstadoCelda.Destapada;
            if(celda.minasCercanas == 0){
                filaMax = this.utilService.maximo(0, fila-1);
                filaMin = this.utilService.minimo(9, fila+1);
                for(let i = filaMax; i>=filaMin; i--){
                    colMax = this.utilService.maximo(0, col-1);
                    colMin = this.utilService.minimo(9, col+1);
                    for(let j=colMax; j>=colMin; j--){
                        celda2 = this.tablero[i][j];
                        if(celda2.minada == false)
                            this.DestaparCelda(celda2);
                    }
                }

            }
        }

    }

    DestaparCeldasTodas(){

    }

    obtenerNroAleatorio(max: number){
        return Math.round(Math.random() * max);
    }

    suscribeEstadoJuego(): Observable<EstadoJuego>{
        return this.estadoObservable;
    }

}
