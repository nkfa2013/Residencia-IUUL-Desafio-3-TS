import { Conta } from './conta';

export class ContaCorrente extends Conta {

    private _limite: number;

    constructor(numero: string, limite: number) {
        super(numero);
        this._limite = limite;
    }

    transferir(contaDestino: Conta, valor: number): void{

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

    calcularSaldo(): number {
        const totalCreditos = this._creditos.reduce((total, credito) => total + credito.valor, 0);

        const totalDebitos = this._debitos.reduce((total, debito) => total + debito.valor, 0);
        
        return totalCreditos - totalDebitos;
    }
}