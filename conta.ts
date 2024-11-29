import { Debito } from './Debito';
import { Credito } from './Credito';

export abstract class Conta {
    protected debitos: Debito[] = [];
    protected creditos: Credito[] = [];
    protected saldo: number = 0;
    constructor(public numero: string) {}

    depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        this.creditos.push(credito);
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            const debito = new Debito(valor, new Date());
            this.debitos.push(debito);
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    abstract calcularSaldo(): number;
}