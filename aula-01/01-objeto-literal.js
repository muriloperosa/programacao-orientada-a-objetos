// criação de objeto da forma literal
var pessoa = {
    // membros
    nome: 'Murilo',
    idade: 24,
    saudar: function () {
        console.log('Olá');
    }
};

var pessoa1 = {
    nome: 'João',
    idade: 27,
    saudar: function () {
        console.log('Olá mundo!');
    }
};


pessoa.saudar();
pessoa1.saudar();
console.log(pessoa, pessoa1);
console.log(pessoa.idade, pessoa1['idade']);

pessoa.nome = 'Murilo Perosa';
pessoa['idade'] = 30;

console.log(pessoa);


pessoa.saudar = function (nome) {
    console.log(`Olá ${nome}!`)
}

pessoa.saudar('Carlos');