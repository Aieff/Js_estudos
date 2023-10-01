// Declaração de função (Function hoisting)
// Pode ser executada antes de sua declaração

falaOi();

function falaOi() {
    console.log('Olá');
}

// First-class objects (Objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('Sou um dado');
};

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);