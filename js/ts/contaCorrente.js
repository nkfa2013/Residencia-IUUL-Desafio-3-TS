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
    // calcularSaldo(): number {
    //     return this._saldo + this._limite;
    // }
    calcularSaldo() {
        const totalCreditos = this._creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this._debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos;
    }
}
exports.ContaCorrente = ContaCorrente;
