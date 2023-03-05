"use strict";
// String
let nome = 'João';
// console.log(nome);
// Numbers
let idade = 27;
// console.log(idade);
// Boolean
let possuiHobbies = false;
// console.log(possuiHobbies);
// Array
let hobbies = ["Cozinhar", "Praticar Esportes"];
// console.log(hobbies);
// Tuplas
let endereco = ["Av Principal", 99, 123];
// console.log(endereco);
// Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Laranja"] = 102] = "Laranja";
    Cor[Cor["Amarelo"] = 103] = "Amarelo";
    Cor[Cor["Vermelho"] = 104] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
// console.log(Cor);
// Any
let carro = 'BMW';
// console.log(carro);
