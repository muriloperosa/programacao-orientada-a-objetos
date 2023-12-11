class Pessoa {
    // privado
     #nome
     #anoDeNascimento
     #profissao
     notas = [];
    constructor (pNome, pAnoDeNascimento, pProfissao) {
        this.#nome = pNome;
        this.#anoDeNascimento = pAnoDeNascimento;
        this.#profissao = pProfissao;
    }
    saudar() {
        this.#falar(`Olá! Eu sou ${this.#nome}`);
    }
    calculaIdade() {
        return new Date().getFullYear() - this.#anoDeNascimento;
    }
    #falar(frase) {
        console.log(frase);
    }
    getProfissao() {
        return this.#profissao;
    }
    setProfissao(valor) {
        this.#profissao = valor;
    }
    addNota (nota){
        this.notas.push(nota);
    }
}

function Estagiario (pNumeroContrato) {
    let numeroContrato = pNumeroContrato;
}

class Nota {
    #grau;
    constructor (disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    }
    setGrau (grau) {
        if (grau < 0 || grau > 10){
            throw new Error('Grau inválido');
        }

        this.#grau = grau;
    }
    getGrau () {
        return this.#grau;
    }
}

/*
const pessoa = new Pessoa('Murilo', 1998, 'Programador');
const estagiario = new Estagiario();
console.log(pessoa, estagiario, pessoa.calculaIdade());
pessoa.saudar();
console.log(pessoa.getProfissao());
pessoa.setProfissao('Desempregado');
console.log(pessoa.getProfissao());
*/

const pessoa2 = new Pessoa('Murilo', 1998, 'Programador');
pessoa2.addNota(new Nota('POO', 10));
pessoa2.addNota(new Nota('Math', 8));
pessoa2.addNota(new Nota('Music', 0));
console.log(pessoa2, pessoa2.notas[0].getGrau());

// , (new Nota('POO', 11))