class Pessoa {
    constructor (nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    }
    saudar() {
        console.log(`Olá! Eu sou ${this.nome}`);
    }
    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

class Estudante extends Pessoa{ 
    constructor (nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, 'Estudante');
        this.matricula = matricula;
    }
    saudar() {
        super.saudar();
        console.log('colega!');
    }
}

class Professor extends Pessoa{ 
    constructor (nome, anoDeNascimento, materia) {
        super(nome, anoDeNascimento, 'Professor');
        this.materia = materia;
    }
}

const pessoa = new Pessoa('Murilo', 1998, 'Programador');
console.log(pessoa, pessoa.calculaIdade());
pessoa.saudar();

const estudante = new Estudante('Bolt', 2020, 158117);
console.log(estudante, estudante.calculaIdade(), estudante.matricula, estudante.saudar());

const professor = new Professor('Murilo', 1990, 'Inglês');
console.log(professor, professor.calculaIdade(), professor.materia);
