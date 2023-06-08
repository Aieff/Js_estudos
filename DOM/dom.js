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


// Eventos do DOM
// Ref. https://developer.mozilla.org/pt-BR/docs/Web/Events

// addEventListener("NomeEvento", funcaoCallback)

const button = document.querySelector("button")
const link = document.querySelector("a")

button.addEventListener("click", () => {
    console.log("Clicou no botão")
})

link.addEventListener("click", (event) => {
    event.preventDefault() // Evita o comportamento padrão do elemento
    console.log("Clicou no Link")
})


// Event Keydown and Keyup
// Evento acionado quando a tecla é pressionada
const inputElem = document.querySelector("input[type=text]")
inputElem.addEventListener("keydown", (event) => {
    console.log("keydown", event)
})

// Evento de volta da tecla
inputElem.addEventListener("keyup", (event) => {
    console.log("keyup", event)
})



// Evento Submit
const formEl = document.querySelector("form")

// Capturar o evento do formulario
formEl.addEventListener("submit", (event) => {
    const queryText = event.target.querySelector("input[name=q]").value // Pega o value pelo input name

    console.log("submit", event)
    console.log("queryText", queryText)

    if(!queryText) { // Se diferente de vazio
        event.preventDefault() // Evita o comportamento padrão do elemento
        alert("Campo se encontra vazio!")
    }

})



// Manipulando estilos CSS (DOM)
const textEl = document.querySelector("#title")
const buttonColor = document.querySelector("#change-color")

buttonColor.addEventListener("click", () => {
    // textEl.style = "color: red; font-size: 55px" // Passa o estilo para meu Elemento (textEl) 
    textEl.style.color = "red"
    textEl.style.fontSize = "55px" // Ambas as formas estão corretas
})


// Manipulando classes CSS (DOM)

const titleEl = document.querySelector("#title")
const buttonClass = document.querySelector("#change-color")

buttonClass.addEventListener("click", () => {
    if (titleEl.classList.contains("highlight")) { // contains return true or false (se ele contem ou não)
        titleEl.classList.remove("highlight")
    } else {
        titleEl.classList.add("highlight") // Adiciona a classe
    }

    titleEl.classList.toggle("highlight") // Faz exatamente o mesmo que meu if (adicionar e remover a classe)
})