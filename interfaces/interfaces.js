"use strict";
function saudarComOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);
// pessoa.saudar('23');
class Cliente {
    constructor() {
        this.nome = 'Matheus';
        this.ultimaCopmra = new Date;
    }
    saudar(sobrenome) {
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
let potencia;
potencia = function (base, exp) {
    return base ** exp;
};
console.log(potencia(2, 8));
