import { Debito } from './Debito';
import { Credito } from './Credito';

export abstract class Conta {
    protected _debitos: Debito[] = [];
    protected _creditos: Credito[] = [];
    protected _saldo: number = 0;
    private _numero: String;

    constructor(numero: string) {
        this._numero = numero;
    }

    depositar(valor: number): void {
        const credito = new Credito(valor, new Date());
        this._creditos.push(credito);
        this._saldo += valor;
    }

    sacar(valor: number): void {
        if (this._saldo >= valor) {
            const debito = new Debito(valor, new Date());
            this._debitos.push(debito);
            this._saldo -= valor;
        } else {
            console.log("Saldo insuficiente.");
        }
    }

    abstract calcularSaldo(): number;
}