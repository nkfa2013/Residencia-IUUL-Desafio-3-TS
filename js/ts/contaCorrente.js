"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
const conta_1 = require("./conta");
class ContaCorrente extends conta_1.Conta {
    constructor(numero, limite) {
        super(numero);
        this._limite = limite;
    }
    transferir(contaDestino, valor) {
        if (this._saldo + this._limite >= valor) {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
        else {
            console.log("Transferência não realizada: saldo insuficiente.");
        }
    }
    calcularSaldo() {
        return this._saldo + this._limite;
    }
}
exports.ContaCorrente = ContaCorrente;
