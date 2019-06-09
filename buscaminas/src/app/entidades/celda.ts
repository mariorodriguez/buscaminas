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

    constructor(){
        this._estado = EstadoCelda.Oculta;
        this._minada = false;
        this._minasCercanas = 0;
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
}