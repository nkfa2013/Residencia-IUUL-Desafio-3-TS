export abstract class Pessoa {
   
    private _nome: String;
    private _idade: Number;
    private _cpf: String;
    private _telefone: String;
    
    constructor(_nome: String, _idade: Number, _cpf: String, _telefone: String) {
        this._nome = _nome;
        this._idade = _idade;
        this._cpf = _cpf;
        this._telefone = _telefone;
    }

    public get nome(): String {
        return this._nome;
    }

    public set nome(value: String) {
        this._nome = value;
    }

    public get idade(): Number {
        return this._idade;
    }

    public set idade(value: Number) {
        this._idade = value;
    }
    
    public get cpf(): String {
        return this._cpf;
    }

    public set cpf(value: String) {
        this._cpf = value;
    }

    public get telefone(): String {
        return this._telefone;
    }
    
    public set telefone(value: String) {
        this._telefone = value;
    }

}