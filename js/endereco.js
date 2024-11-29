"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro) {
        this._cep = cep;
        this._logradouro = logradouro;
    }
    get cep() {
        return this._cep;
    }
    set cep(value) {
        this._cep = value;
    }
    get logradouro() {
        return this._logradouro;
    }
    set logradouro(value) {
        this._logradouro = value;
    }
}
exports.Endereco = Endereco;
