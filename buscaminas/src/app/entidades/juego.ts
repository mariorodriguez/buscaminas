import { Celda } from './celda';
import { UtilService } from '../servicios/util.service';

export enum EstadoJuego{
    Inicio = 0,
    Jugando = 1,
    Ganado = 2,
    Perdido = 3
}

export class Juego {
    estado: EstadoJuego = EstadoJuego.Inicio;
    celdasDestapadas: number = 0;
    tablero:Celda [][]; //= [new Array(9), new Array(9)];
    filas: number = 10;
    columnas: number = 10;

    constructor(private utilService: UtilService){
        this.IniciarJuego();
    }

    IniciarJuego(){
        this.celdasDestapadas = 0;
        this.estado = EstadoJuego.Jugando;
        this.GenerarTablero();
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
            while(celda.minada == false)
            celda.minada == true;
            minas++;
            
        }
        console.log("Se colocaron minas.");
        console.log(this.tablero);
    }

    DestaparCelda(){

    }

    DestaparCeldasTodas(){

    }

    obtenerNroAleatorio(max: number){
        return Math.round(Math.random() * max);
    }


}
