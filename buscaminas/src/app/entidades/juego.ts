export enum EstadoJuego{
    Inicio = 0,
    Jugando = 1,
    Ganado = 2,
    Perdido = 3
}

export class Juego {
    _estado: EstadoJuego = EstadoJuego.Inicio;
    _celdasDestapadas: number = 0;
    constructor(){
        this.IniciarJuego();
    }

    IniciarJuego(){
        this._celdasDestapadas = 0;
        this._estado = EstadoJuego.Jugando;
    }    

    GenerarTablero(){
    }

    Minar(){
    }

    DestaparCelda(){

    }

    DestaparCeldasTodas(){

    }

    

}
