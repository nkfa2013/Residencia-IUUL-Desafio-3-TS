"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
class Cargo {
    constructor(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
}
exports.Cargo = Cargo;
