import { Conta } from './conta';

export class ContaPoupanca extends Conta {

    calcularSaldo(): number {
        const totalCreditos = this._creditos.reduce((total, credito) => total + credito.valor, 0);

        const totalDebitos = this._debitos.reduce((total, debito) => total + debito.valor, 0);
        
        return totalCreditos - totalDebitos;
    }
}