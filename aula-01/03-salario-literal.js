const empregado = {
    salarioFixo: 5000,
    valorHoraExtra: 100,
    horasExtras: 20,
    calculaSalario: function () {
        return this.salarioFixo + (this.valorHoraExtra * this.horasExtras);
    }
}

console.log(empregado.calculaSalario());