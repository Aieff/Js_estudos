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