"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor() {
        super(...arguments);
        this._enderecos = [];
    }
    get enderecos() {
        return this._enderecos;
    }
    set enderecos(value) {
        this._enderecos = value;
    }
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
}
exports.Cliente = Cliente;
