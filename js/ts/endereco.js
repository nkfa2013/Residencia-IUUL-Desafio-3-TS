"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endereco = void 0;
class Endereco {
    constructor(cep, logradouro, numero, cidade, uf) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        //this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
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
    get numero() {
        return this._numero;
    }
    set numero(value) {
        this._numero = value;
    }
    get complemento() {
        return this._complemento;
    }
    set complemento(value) {
        this._complemento = value;
    }
    get cidade() {
        return this._cidade;
    }
    set cidade(value) {
        this._cidade = value;
    }
    get uf() {
        return this._uf;
    }
    set uf(value) {
        this._uf = value;
    }
}
exports.Endereco = Endereco;
