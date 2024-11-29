export class Endereco {
    private _cep: String;
    private _logradouro: String;
    private _numero: String;
    private _complemento!: String;
    private _cidade: String;
    private _uf: String;

    constructor(cep: String, logradouro: String, numero: String, cidade: String, uf: String) {
        this._cep = cep;
        this._logradouro = logradouro;
        this._numero = numero;
        //this._complemento = complemento;
        this._cidade = cidade;
        this._uf = uf;
    }

    public get cep(): String {
        return this._cep;
    }

    public set cep(value: String) {
        this._cep = value;
    }

    public get logradouro(): String {
        return this._logradouro;
    }

    public set logradouro(value: String) {
        this._logradouro = value;
    }

    public get numero(): String {
        return this._numero;
    }

    public set numero(value: String) {
        this._numero = value;
    }

    public get complemento(): String {
        return this._complemento;
    }

    public set complemento(value: String) {
        this._complemento = value;
    }

    public get cidade(): String {
        return this._cidade;
    }

    public set cidade(value: String) {
        this._cidade = value;
    }

    public get uf(): String {
        return this._uf;
    }

    public set uf(value: String) {
        this._uf = value;
    }

}