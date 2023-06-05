// Acessando os nós do DOM
// Forma "antiga"...
// document.getElementById()
// document.getElementByTagName()
// document.getElementsByClassName()

// Forma moderna...
document.querySelector('selector')
document.querySelectorAll('selector')
element.querySelector('selector')
element.querySelectorAll('selector')

// CSS Seletors
// Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
// Universal: *
// Id: #el-id
// Tag: <el>
// Class: .el-class
// Atributos: [attr=value]
// Grupos (vírgula): el,el
// Descendentes (espaço): el el
// Childs (>): el > el

console.log("*", document.querySelectorAll("*"))
console.log("id", document.querySelector("#person-name"))
console.log("tag", document.querySelectorAll("p"))
console.log("class", document.querySelectorAll(".text"))
console.log("attr", document.querySelectorAll("a[href]"))
console.log("attr", document.querySelectorAll("a[href='https://github.com/Aieff']"))

// Iterando toda a árvore DOM...
// for (const el of document.querySelectorAll("*")) {
//   console.log("el", el)
// }

// Alteração de dados
const nome = document.querySelector('#person-name')
nome.innerHTML = "Gabriel Oliveira"
nome.style.color = "red"


// Elementos dinâmicos
// Ref. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
const subTitle = document.createElement("h2")
subTitle.innerHTML = "Projetos"

document.body.append(subTitle) // Adiciona á nossa árvore DOM

const pList = document.createElement("ul")
const pjListItemOne = document.createElement("li")  // Cria o meu elemento
const pjListItemTwo = document.createElement("li")
const pjListItemThree = document.createElement("li")

pjListItemOne.innerHTML = "TODO MVC"
pjListItemTwo.innerHTML = "Github API"
pjListItemThree.innerHTML = "eCommerce"

pList.append(pjListItemOne) // Inseri os elementos da lista
pList.append(pjListItemTwo) 
pList.append(pjListItemThree) 

document.body.append(pList) // Adiciona á nossa árvore DOM

for (const i = 0; i < 3; i++) {
    pjListItemThree.innerHTML = `eCommerce ${i}`
}
