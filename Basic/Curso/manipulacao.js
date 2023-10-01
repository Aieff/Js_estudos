// Conversão e manipulação de dados

// Type casting = conversão pelo usuário
// Type coersion = Conversão 'coerctiva pela VM (Virtual Machine)

console.log(Number("2") + 2) // = 4

console.log(typeof "2")
console.log(typeof Number("2"))

console.log(typeof Number("a")) //Retorna NaN

console.log(Number(true)) // Retorna 1

console.log(String(true)) // Retorna a palvra true

// Boolean
console.log(Boolean(0)) // False
console.log(Boolean(0)) // True
console.log(Boolean("")) // False
console.log(Boolean("abc")) // True

// Date

// Date -> formato ISO mm/dd/yyyy
console.log(new Date("05/30/2023"))

console.log(new Date("2023-04-30"))
console.log(new Date("2023 04 30"))

console.log(new Date().toString()) // Transforma em string
console.log(new Date().toISOString()) // Formato ISO

// Array
let nome = "Gabriel"

let array = ['Gabriel', 'Alexandre', 'David']
let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(arrayNumber.join()) 
console.log(nome.join()) 
console.log(nome.split(" ")) // Splitar

console.log(nome.split(" ").join("-"))

// Maiusculas e minusculas
let frase = "Olá eu me Chamo Gabriel Oliveira"
console.log(frase.toLowerCase) // Minuscula
console.log(frase.toUpperCase) // Maiuscula

// Localizando strings
console.log(frase.includes("!")) // True
console.log(frase.includes("biel")) // False (Lembrete N != n) ideal usar LowerCase

// Substituição de strings

// Palavra/frase a ser buscada (Valor a ser inserido)
console.log(frase.replace("Gabriel", "Alexandre"))

let value = 13212.4324
console.log(value.toFixed(2).replace(".", ","))