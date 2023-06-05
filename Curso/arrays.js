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




// Map
const array = [1, 3, 5, 6, 7, 8]

// Multiplica por 2 o valor de cada indice
const double = numbers.map((n) => n * 2)
console.log(double)


const fr = [0, 32, 45, 46, 47, 91, 93, 121]
const celcius = fr.map((t) => Math.round(((t - 32) * 5) / 9)) // Round nivelar os números (arredondar)
console.log(celcius)

const people2 = [
    {
        name: 'feLipe',
        age: 40
    },
    {
        name: 'CarLos',
        age: 14
    },
    {
        name: 'Ana',
        age: 18
    }
]

// Nivelar o conjunto de dados
const peopleNormalized = people2.map((p) => p.name.toUpperCase())
console.log(peopleNormalized)



// Reduce

    // Ref. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

    // array.reduce(callback[, initialValue])
    //
    // callback - Função que é executada em cada valor no array, recebe quatro argumentos:
    //   acumulator - O valor retornado na última invocação do *callback*, ou o argumento Valor Inicial, se fornecido.
    //   currentValue - O elemento atual que está sendo processado no array.
    //   indice - O índice do elemento atual que está sendo processado no array.
    //   array - O array ao qual a função reduce foi chamada.
    // initialValue - Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback.

    let values = [1.5, 2, 4, 10]

    function callback(acumulator, currentValue, index, array) {
      console.log(`acumulator`, acumulator)
      console.log(`currentValue`, currentValue)
      console.log(`index`, index)
      console.log(`array`, array)
      console.log("---")

      return acumulator
    }

    values.reduce(callback, 0)

    // Agregação
    // let sum = values.reduce((total, item) => total + item, 0)
    // console.log("sum", sum)

    // let avg = values.reduce(
    //   (total, item, index) => (total + item) / (index + 1),
    //   0
    // )
    // console.log("avg", avg)

    // Map
    // let double = values.reduce((total, item) => total.concat(item * 2), [])
    // console.log("double", double)

    // Filter
    // let newValues = values.reduce((total, item) => {
    //   if (item > 2) {
    //     total.push(item)
    //   }

    //   return total
    // }, [])
    // console.log("newValues", newValues)