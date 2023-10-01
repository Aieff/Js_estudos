//Enquanto a condição for verdadeira, execute...

// Loop infinito (condição nunca se altera)
// while(true) {
//     console.log("executando...")
// }

let contador = 1

while(contador < 10) {
    console.log(`Executando...  ${contador}`)
    contador++
}


//Define variavel / Passa a condição / adiciona o contador

for(let i = 0; i < 3; i++) {
    console.log(i)
}


// Percorrendo um array
const nome = ['Gabriel', 'Alexandre', 'Camila']

for(let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}


// For of

for(const nomes of nome) {
    console.log(nomes[i])
}


// For in (Objetos)
// objeto.prop
// objeto.['prop']

const person = {
    name: 'Gabriel',
    age: 20
}

for(const prop in person) {
    console.log(`Prop: ${prop}`)
}