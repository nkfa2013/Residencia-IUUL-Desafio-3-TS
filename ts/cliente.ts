import { Conta } from "./conta";
import { ContaCorrente } from "./contaCorrente";
import { Endereco } from "./endereco";
import { IUsuario } from "./IUsuario";
import { Pessoa } from "./pessoa";


export class Cliente extends Pessoa implements IUsuario {

    private _enderecos: Endereco[] = [];
    private _contas: Conta[] = [];
    private vip: boolean;

    constructor(nome: string, idade: number, cpf: string, telefone: string, vip: boolean) {
        super(nome, idade, cpf, telefone);
        this.vip = vip;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    
    public getConta(nroConta: string): Conta {
        this._contas.forEach(conta => {
            if (conta.numero == nroConta)
                return conta;
        });
        return this._contas[0];
    }
    

    public adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }

    autenticar(): boolean {
        return true;
    }

    public listarEnderecos() {
        console.log("Endereços do Cliente:");
        this._enderecos.forEach(endereco => {
            console.log(`${endereco.logradouro}, ${endereco.numero}${endereco.complemento != "" ? ', ' + endereco.complemento : ''} - ${endereco.cidade}, ${endereco.uf}`);
        });
    }

    public adicionarConta(conta: Conta) {
        this._contas.push(conta);
    }

    public saldo(nroConta: string): number {

        this._contas.forEach(conta => {
            if (conta.numero == nroConta)
                return conta.calcularSaldo();
        })
        return 0;
    }

}
