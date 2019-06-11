export enum EstadoCelda{
    Oculta = 0,
    Destapada = 1,
    Bandera = 2,
    Dudosa = 3
}

export class Celda{
    private _estado: EstadoCelda;
    private _minada: boolean;
    private _minasCercanas: number;
    private _nroFila: number;
    private _nroColumna: number;

    constructor(fila: number, columna: number){
        this._estado = EstadoCelda.Oculta;
        this._minada = false;
        this._minasCercanas = 0;
        this._nroFila = fila;
        this._nroColumna = columna;
    }

    get estado(){
        return this._estado;
    }

    get minada(){
        return this._minada;
    }

    get minasCercanas(){
        return this._minasCercanas;
    }

    get nroFila(){
        return this._nroFila;
    }

    get nroColumna(){
        return this._nroColumna;
    }

    set estado(estado: EstadoCelda){
        this._estado = estado;
    }

    set minada(valor: boolean){
        this._minada = valor;
    }

}