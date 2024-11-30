"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
const pessoa_1 = require("./pessoa");
class Funcionario extends pessoa_1.Pessoa {
    constructor(nome, idade, cpf, telefone, salario) {
        super(nome, idade, cpf, telefone);
        this._cargo = [];
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    adicionarCargo(cargo) {
        this._cargo.push(cargo);
    }
    autenticar() {
        return true;
    }
}
exports.Funcionario = Funcionario;
