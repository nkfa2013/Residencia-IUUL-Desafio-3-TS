"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
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
}
exports.Pessoa = Pessoa;
