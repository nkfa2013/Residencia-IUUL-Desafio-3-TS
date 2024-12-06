"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("./cliente");
const endereco_1 = require("./endereco");
const contaCorrente_1 = require("./contaCorrente");
const funcionario_1 = require("./funcionario");
const cargo_1 = require("./cargo");
console.log("App 1: \n");
app1();
console.log("App 2: \n");
app2();
console.log("App 3: \n");
app3();
// console.log("App 4: \n");
// app4();
// console.log("App 5: \n");
// app5();
function app1() {
    var func1 = new funcionario_1.Funcionario("Fulano", 25, "12345678900", "(21) 98765-4321", 10000);
    var func2 = new funcionario_1.Funcionario("Siclano", 30, "12345678999", "(21) 98765-4311", 15000);
    var gerente = new cargo_1.Cargo("Gerente");
    var atendente = new cargo_1.Cargo("Atendente");
    func1.adicionarCargo(atendente);
    func2.adicionarCargo(gerente);
}
function app2() {
    var cliente = new cliente_1.Cliente("Nikolas F", 27, "12345678900", "(21) 99988-7766", true);
    var endereco1 = new endereco_1.Endereco("21920-300", "Rua Professor Veríssimo", "300", "Rio de Janeiro", "RJ");
    var endereco2 = new endereco_1.Endereco("21920-400", "Rua Professor Marcelo", "400", "Rio de Janeiro", "RJ");
    var endereco3 = new endereco_1.Endereco("21920-500", "Rua Marcilio Dias", "500", "Rio de Janeiro", "RJ");
    endereco3.complemento = "Casa 1";
    cliente.adicionarEndereco(endereco1);
    cliente.adicionarEndereco(endereco2);
    cliente.adicionarEndereco(endereco3);
    console.log("Nome do Cliente: " + cliente.nome);
    console.log("Idade do Cliente: " + cliente.idade);
    cliente.listarEnderecos();
}
function app3() {
    var cliente = new cliente_1.Cliente("Nikolas F", 27, "12345678900", "(21) 99988-7766", true);
    var conta = new contaCorrente_1.ContaCorrente("1009988", 100);
    cliente.adicionarConta(conta);
    console.log(cliente.saldo("1009988"));
    cliente.getConta("1009988").depositar(100);
    cliente.getConta("1009988").depositar(100);
    cliente.getConta("1009988").depositar(100);
    cliente.getConta("1009988").sacar(50);
    console.log(cliente.saldo("1009988"));
}
function app4() {
    var cliente = new cliente_1.Cliente("Nikolas F", 27, "12345678900", "(21) 99988-7766", true);
    var contaCorrente = new contaCorrente_1.ContaCorrente("1009988", 0);
    cliente.adicionarConta(contaCorrente);
}
function app5() {
}
