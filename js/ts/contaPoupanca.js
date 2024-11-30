"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaPoupanca = void 0;
const conta_1 = require("./conta");
class ContaPoupanca extends conta_1.Conta {
    calcularSaldo() {
        const totalCreditos = this._creditos.reduce((total, credito) => total + credito.valor, 0);
        const totalDebitos = this._debitos.reduce((total, debito) => total + debito.valor, 0);
        return totalCreditos - totalDebitos;
    }
}
exports.ContaPoupanca = ContaPoupanca;
