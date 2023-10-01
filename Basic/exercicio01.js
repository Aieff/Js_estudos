// Luiz Otávio Mirando tem 30 anos, pesa 84KG tem 1.8 de altura
// e seu IMC é de 25.925925925925
// Luiz nasceu em 1980

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80; // Metros
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
console.log(imc);
anoNascimento = 2023 - idade;


// três maneiras diferentes de concatenar
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'KG');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome + '' + 'nasceu em ' + anoNascimento);

