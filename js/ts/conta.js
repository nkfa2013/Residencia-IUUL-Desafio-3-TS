"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
const debito_1 = require("./debito");
const credito_1 = require("./credito");
class Conta {
    constructor(numero) {
        this._debitos = [];
        this._creditos = [];
        this._saldo = 0;
        this._numero = numero;
    }
    get numero() {
        return this._numero;
    }
    set numero(numero) {
        this._numero = numero;
    }
    depositar(valor) {
        const credito = new credito_1.Credito(valor, new Date());
        this._creditos.push(credito);
        this._saldo += valor;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            const debito = new debito_1.Debito(valor, new Date());
            this._debitos.push(debito);
            this._saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente.");
        }
    }
}
exports.Conta = Conta;
