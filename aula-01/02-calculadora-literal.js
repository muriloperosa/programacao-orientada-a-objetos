const calculadora = {
    numero1: 10,
    numero2: 10,
    soma: function() {
        return this.numero1 + this.numero2;
    } 
};

console.log(calculadora.soma())