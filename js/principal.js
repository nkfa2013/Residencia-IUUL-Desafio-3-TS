"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const endereco_1 = require("./endereco");
var cliente = new cliente_1.Cliente();
cliente.nome = "João";
cliente.idade = 20;
var endereco1 = new endereco_1.Endereco('21920-310', 'Rua Professor Veríssimo');
var endereco2 = new endereco_1.Endereco('21920-000', 'Rua das Flores');
cliente.adicionarEndereco(endereco1);
cliente.adicionarEndereco(endereco2);
console.log("Nome do Cliente: " + cliente.nome);
console.log("Idade do Cliente: " + cliente.idade);
console.log("Endereços do cliente:");
for (let endereco of cliente.enderecos) {
    console.log(endereco.cep + " - " + endereco.logradouro);
}
