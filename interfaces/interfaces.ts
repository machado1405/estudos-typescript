// Interface determina como um contrato
// padrões que o objeto deve seguir.
interface Humano {
  nome: string,
  idade?: number, // Interrogação deixa o atributo opcional
  [prop:string]: any, // Quando existe mais um atributo, porém nao sabe o tipo nem o nome que este atributo recebe.
  saudar(sobrenome: string):void
}

function saudarComOla(pessoa:Humano) {
  console.log('Olá, ' + pessoa.nome);
}

function mudarNome(pessoa:Humano) {
  pessoa.nome = 'Joana';
}

const pessoa:Humano = {
  nome: 'João',
  idade: 27,
  saudar(sobrenome) {
    console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

// saudarComOla(pessoa);
// mudarNome(pessoa);
// saudarComOla(pessoa);
// pessoa.saudar('23');

class Cliente implements Humano {
  nome = 'Matheus';
  ultimaCopmra: Date = new Date;
  saudar(sobrenome:string) {
    console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome);
  }
}

// const meuCliente = new Cliente();
// meuCliente.nome = "Matheus";
// meuCliente.saudar("Machado");
// console.log(meuCliente.ultimaCopmra);

// Interface Função
interface FuncaoCalculo {
  (a:number, b:number):number
}

let potencia: FuncaoCalculo;

potencia = function(base:number, exp:number):number {
  return base ** exp;
}
console.log(potencia(2, 8));
