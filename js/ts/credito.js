"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
class Credito {
    constructor(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    get valor() {
        return this._valor;
    }
    set valor(valor) {
        this._valor = valor;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}
exports.Credito = Credito;
