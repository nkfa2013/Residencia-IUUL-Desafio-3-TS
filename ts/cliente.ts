import { Endereco } from "./endereco";
import { Pessoa } from "./ts/pessoa";
import { IUsuario } from './IUsuario';
import { Conta } from './conta';

export class Cliente extends Pessoa implements IUsuario {
    
    private _enderecos: Endereco[] = [];
    private contas: Conta[] = [];
    private vip: boolean;

    constructor(nome: String, idade: Number, cpf: String, telefone: String, vip: boolean) {
        super(nome, idade, cpf, telefone);
        this.vip = vip;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    public adicionarEndereco(endereco: Endereco) {
        this._enderecos.push(endereco);
    }

    autenticar(): boolean {
        return true;
    }

    public listarEnderecos() {
        console.log("Endereços do Cliente:");
        this.enderecos.forEach(endereco => {
            console.log(`${endereco.logradouro}, ${endereco.numero}${endereco.complemento != "" ? ', ' + endereco.complemento : ''} - ${endereco.cidade}, ${endereco.uf}`);
        });
    }

    public adicionarConta(conta: Conta){
        this.contas.push(conta);
    }
}
