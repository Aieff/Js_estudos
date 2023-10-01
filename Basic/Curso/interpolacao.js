let nome, age

nome = "Gabriel",
age = 20,
address = {
    street: "Rua teste",
    city: "itajubá"
}
// Json.stringify(Debuga um objeto) apresenta como string
console.log(`${nome} você tem ${age} anos e reside em ${JSON.stringify(address)}`)