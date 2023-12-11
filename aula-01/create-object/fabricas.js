
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        saudar: function () {
            console.log('Olá mundo!');
        }
    };
}

var pessoa  = criarPessoa('Murilo', 24);
var pessoa1 = criarPessoa('Bolt', 2);
console.log(pessoa, pessoa1);