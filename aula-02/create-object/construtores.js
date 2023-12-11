function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

const pessoa = new Pessoa('Murilo', 1998, 'Programador');
console.log(pessoa, pessoa.calculaIdade());

const pessoa1 = new Pessoa('Bolt', 2020, 'Guarda');
console.log(pessoa1, pessoa1.calculaIdade());

// Object
const pessoa3 = new Object();
console.log(pessoa3)