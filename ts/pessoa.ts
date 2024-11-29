export abstract class Pessoa {
   
    private _nome: string;
    private _idade: number;
    private _cpf: string;
    private _telefone: string;
    
    constructor(nome: string, idade: number, cpf: string, telefone: string) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._telefone = telefone;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }
    
    public get cpf(): string {
        return this._cpf;
    }

    public set cpf(value: string) {
        this._cpf = value;
    }

    public get telefone(): string {
        return this._telefone;
    }
    
    public set telefone(value: string) {
        this._telefone = value;
    }

}