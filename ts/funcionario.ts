import { Pessoa } from './pessoa';
import { IUsuario } from './IUsuario';
import { Cargo } from './cargo';

export class Funcionario extends Pessoa implements IUsuario {

    private _salario: number;
    private _cargo: Cargo[] = [];

    constructor(nome: string, idade: number, cpf: string, telefone: string, salario: number, ) {
        super(nome, idade, cpf, telefone);
        this._salario = salario;
    }
    
    public get salario() : number {
        return this._salario;
    }
    
    public set salario(salario : number) {
        this._salario = salario;
    }

    public adicionarCargo(cargo: Cargo) {
        this._cargo.push(cargo);
    }

    autenticar(): boolean {
        return true;
    }
}