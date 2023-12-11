function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa('Murilo', 1998, 'Programador');
const pessoa3 = new Object();

// Object.getPrototypeOf
console.log(Object.getPrototypeOf(pessoa), Object.getPrototypeOf(pessoa3))

// SOMENTE NA CONSOLE DO NAVEGADOR 
// console.log(pessoa3.__proto__)

// Faz uma cópia através de protótipo
const pessoa4 = Object.create(pessoa3);
const pessoa5 = Object.create(pessoa);

console.log(pessoa4, pessoa5);
