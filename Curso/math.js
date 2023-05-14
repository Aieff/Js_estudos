// biblioteca JavaScript para exibir matemática em navegadores de maneira multiplataforma.

let numero1 = 9.4343;

let result = Math.floor(numero1); // Arredondando para baixo o valor de number1
console.log(result);

let result2 = Math.ceil(numero1); // Oposto do floor
console.log(result2);

let result3 = Math.round(numero1); // Arredonda o valor para o mais próximo
console.log(result3);

let result4 = Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6); // Retornar o maior número dessa sequência o oposto seria Math.min()
console.log(result4);

let result5 = Math.random(); // Gerar números aleatórios
console.log(result5);

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Retorna um valor aleatorio entre 10 e 5 de forma inteira
console.log(aleatorio);