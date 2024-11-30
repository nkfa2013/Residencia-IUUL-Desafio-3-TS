import { Cliente } from "./cliente";
import { Endereco } from "./endereco";
import { ContaCorrente } from './contaCorrente';
import { ContaPoupanca } from './contaPoupanca';
import { Funcionario } from "./funcionario";
import { Cargo } from "./cargo";

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

function app1(): void {
    var func1 = new Funcionario("Fulano", 25, "12345678900", "(21) 98765-4321", 10000);
    var func2 = new Funcionario("Siclano", 30, "12345678999", "(21) 98765-4311", 15000);

    var gerente: Cargo = new Cargo("Gerente");
    var atendente: Cargo = new Cargo("Atendente");

    func1.adicionarCargo(atendente);
    func2.adicionarCargo(gerente);

}

function app2(): void {

    var cliente = new Cliente("Nikolas F", 27, "12345678900", "(21) 99988-7766", true);

    var endereco1 = new Endereco("21920-300", "Rua Professor Veríssimo", "300", "Rio de Janeiro", "RJ");
    var endereco2 = new Endereco("21920-400", "Rua Professor Marcelo", "400", "Rio de Janeiro", "RJ");
    var endereco3 = new Endereco("21920-500", "Rua Marcilio Dias", "500", "Rio de Janeiro", "RJ");
    endereco3.complemento = "Casa 1";

    cliente.adicionarEndereco(endereco1);
    cliente.adicionarEndereco(endereco2);
    cliente.adicionarEndereco(endereco3);

    console.log("Nome do Cliente: " + cliente.nome);
    console.log("Idade do Cliente: " + cliente.idade);

    cliente.listarEnderecos();
}

function app3(): void {
    var cliente = new Cliente("Nikolas F", 27, "12345678900", "(21) 99988-7766", true);

    var conta: ContaCorrente = new ContaCorrente("1009988", 500);
    cliente.adicionarConta(conta);

    console.log(cliente.saldo(conta.numero));
}

function app4(): void {

}

function app5(): void {

}