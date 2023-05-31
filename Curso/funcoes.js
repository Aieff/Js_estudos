function saudacao(nome) {
    //console.log(`Bom dia ${nome}!`);
    return `Bom dia ${nome}!`; // Me retorna um valor X
}

saudacao('Gabriel'); // Executa e passa o parametro para a função

const variavel = saudacao('Gabriel'); // Meu valor retornado fica salvo na variavel
console.log(variavel);


function soma(x,y) {
    const result = x + y;
    return result;
}

console.log(soma(2,2)); // Passando o parametro para minha função
console.log(soma(4,5)); // Passando o parametro para minha função
console.log(soma(6,7)); // Passando o parametro para minha função

const result = soma(2,2); // Const de um função é totalmente diferente ou seja não estou redeclarando ela


// Modo alternativo de função no qual seu valor é salvo na variavel diretamente
const raiz = function (n) {
    return n ** 0.5;
}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(56));

// Arrow function 
// const raiz = n => n ** 0.5;
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(56));


/* Dev samurai */

function sayHello(name, lastname) {
    console.log(`Olá ${name}${lastname}. Bem-vindo à Dev Samurai!`)
}

sayHello('Gabriel', 'Oliveira')
sayHello('Alexandre', 'Fernades')
sayHello('David', 'Oliveira')


// Return
function sum(n1, n2) {
    const result = n1 + n2

    return result
}

console.log(sum(1, 1))


// Argumentos (arguments) (Número indefinido de parametros)
function sum() {
    let res = 0
    // console.log(arguments)

    for (const n of arguments) {
        console.log(n)
        res += n
    }

    return res
}

console.log(sum(1, 1, 2, 3, 4, 5, 6, 7, 8, 8, 6))


function multObj(obj) {
    obj.value *= obj.value
    return obj
}

const numObj = {
    value: 10
}

console.log(multObj(numObj))

console.log(numObj) // Valor é alterado 

// Arrow Function
// Function se torna a arrow =>

const mult = (n) => {
    n *= n
    return n
}

// Somente uma linha 
const mult2 = (n) => (n *= n) // Já possui o return implicito
