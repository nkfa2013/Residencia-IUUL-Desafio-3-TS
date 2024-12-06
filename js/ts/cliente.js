"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const pessoa_1 = require("./pessoa");
class Cliente extends pessoa_1.Pessoa {
    constructor(nome, idade, cpf, telefone, vip) {
        super(nome, idade, cpf, telefone);
        this._enderecos = [];
        this._contas = [];
        this.vip = vip;
    }
    get enderecos() {
        return this._enderecos;
    }
    set enderecos(value) {
        this._enderecos = value;
    }
    getConta(nroConta) {
        this._contas.forEach(conta => {
            if (conta.numero == nroConta)
                return conta;
        });
        return this._contas[0];
    }
    adicionarEndereco(endereco) {
        this._enderecos.push(endereco);
    }
    autenticar() {
        return true;
    }
    listarEnderecos() {
        console.log("Endereços do Cliente:");
        this._enderecos.forEach(endereco => {
            console.log(`${endereco.logradouro}, ${endereco.numero}${endereco.complemento != "" ? ', ' + endereco.complemento : ''} - ${endereco.cidade}, ${endereco.uf}`);
        });
    }
    adicionarConta(conta) {
        this._contas.push(conta);
    }
    saldo(nroConta) {
        this._contas.forEach(conta => {
            if (conta.numero == nroConta)
                return conta.calcularSaldo();
        });
        return 0;
    }
}
exports.Cliente = Cliente;
