var valores = [8,1,7,2,9];

console.log(valores[3])

console.log("Array invertido" + valores.reverse());

for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao: " + pos +" Valor: " + valores[pos]);
}

var carros = [];
carros[0]= "Fit";
carros[1]= "HRV";

var motos = new Array("BMW", "Honda", "Yamaha");


//calcualr a media de todos os numeros de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;
console.log(media);

var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('-')); //inseri um caracter entre os arrays
console.log(arr1);

console.log("Posicao do numero 3: " + arr1.indexOf(3)); //mostra a posição do valor no array

var retirado = arr1.shift(); //retira uma posição do array
console.log(retirado);
console.log(arr1);

arr1.push(7);//inseri uma posição no array
console.log(arr1);

//substitui dados no array
var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice (1,2, "Luiz","Ronaldo");
console.log(nomes);

//inseri dados no array
var pais = ["Brasil","Argentina","Colombia"];
pais.unshift("Uruguai");
console.log(pais);