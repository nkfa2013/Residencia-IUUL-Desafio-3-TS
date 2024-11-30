"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, idade, cpf, telefone) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._telefone = telefone;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        this._nome = value;
    }
    get idade() {
        return this._idade;
    }
    set idade(value) {
        this._idade = value;
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(value) {
        this._cpf = value;
    }
    get telefone() {
        return this._telefone;
    }
    set telefone(value) {
        this._telefone = value;
    }
}
exports.Pessoa = Pessoa;
