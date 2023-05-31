//Escrever um algoritmo do custo da fabrica de um carro e escrever o custo final
var carro = 40000;
var distribuidor;
var imposto;
var custoFinal = 0;

distribuidor = carro * 28/100;
imposto = carro * 45/100;
custoFinal = carro + distribuidor + imposto;

console.log("O custo final do carro é: "+ custoFinal)