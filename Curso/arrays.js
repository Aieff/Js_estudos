const arrayNomes = ['Luiz', 'Maria', 'João', 'Gabriel'];
console.log(arrayNomes);

console.log(arrayNomes[2]); // Retorna o valor do indice 2

arrayNomes[0] = 'Alexandre'; // Editar o valor do indice especificado
console.log(arrayNomes);

arrayNomes[4] = 'Luiza'; // Adiciona um novo indice com um novo elemento porém é necessário saber o tamanho do array

console.log(arrayNomes.length); // Retorna o tamanho do array Começando por 1 ao inves de 0

arrayNomes[arrayNomes.length] = 'Fábio'; // Adiciona um novo item ao final do array

arrayNomes.push('Otávio'); // Melhora forma de adicionar um novo valor ao final de um array

arrayNomes.unshift('Camila'); // Adiciona novo valor como primeiro indice

arrayNomes.pop(); // Remove o ultimo elemento do array
const removidos = arrayNomes.pop(); // Você pode salvar o valor removido em uma variavel

arrayNomes.shift(); // Remove o primeiro elemento do array

delete arrayNomes[1]; // Deleta o valor daquele indice e você fica com o elemento vazio

console.log(arrayNomes.slice(0, 3)); // Retorna os valores até o indice determinado se você quer do 0 ao 2 deve especificar 0 a 3

const person = [
    {name:"Felipe", age: 20},
    {name:"Gabriel", age: 30},
    {name:"Alexandre", age: 24},
]

console.log(person[0]); // Irá tratalo como um objeto
