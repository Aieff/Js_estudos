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



// Manipulação de arrays

let people = ['Felipe', 'Gabriel', 'Alexandre', 'David']

console.log(people[2])
console.log(people[people.length - 1]) // Ultimo indice

console.log(people.slice(2)) // 2 em diante
console.log(people.slice(1, 3))


// Concatenação de arrays

let set1 = [1, 4, 6, 8, 9, 0]
let set2 = [2, 5, 8, 3, 7, 9]

console.log(set1 + set2) // Na pratica cria uma string ou seja (ERRADO) "COERSION"

console.log([set1, set2]) // Cria um novo array com 2 sub-arrays (ERRADO)

console.log(set1.concat(set2)) // Cria um novo array concatenado (CORRETO)



// Desestruturação
let set = [1, 2, 3, 4, 5]

let [n1, n2] = set // 1, 2 // Retorna o elemento
console.log('N1', n1)
console.log('N2', n2)

// Util em funções que retornam arrays
function myFunction() {
    const x = 10
    const y = 400

    return [x, y]
}

const [x, y] = myFunction()
console.log("X", x)
console.log("Y", y)



// Filter
const numbers = [10, 18, 1, 15]

let res = numbers.filter((n) => n > 10) // Arrow function
console.log(res)


const people1 = [
    {
        name: 'Paulo',
        age: 30,
        gender: 'M'
    },
    {
        name: 'Carlos',
        age: 14,
        gender: 'M'
    },
    {
        name: 'Ana',
        age: 18,
        gender: 'M'
    }
]

const m = people1.filter((p) => p.age >= 18 && p.gender === 'M')
console.log(m)