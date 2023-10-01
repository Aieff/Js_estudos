 const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita com que o navegador faça o padrão (Load)
    const inputPeso = event.target.querySelector('#peso'); // Informa o element que recebe o evento 
    const inputAltura = event.target.querySelector('#altura'); // Informa o element que recebe o evento 

    const peso = Number(inputPeso.value); // Pega o valor do input e armazena na const
    const altura = Number(inputAltura.value); // Pega o valor do input e armazena na const

    if(!peso) { // Diverente de True
        setResult('Peso inválido', false); // Retorna false
        return; // Me da um retorno e para de executar o código
    } 

    if(!altura) {
        setResult('Altura inválida', false); // Retorna false
        return; // Me da um retorno e para de executar o código
    }

    const imc = getImc(peso, altura); //calcula imc
    const nivelImc = getNivelImc(imc); // pega o nivel do imc

    const msg = `Seu IMC é ${imc} (${nivelImc}).` // Retorna minha msg

    setResult(msg, true); // Setou o resultado com a Flag True

});

// Array das minhas respostas
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    // Condições do IMC // Return para minha função então não é necessario else if
    if(imc >= 39.9) {
        return nivel[5];
    }  
    if(imc >= 34.9) {   
        return nivel[4];
    }  
    if(imc >= 29.9) {
        return nivel[3];
    } 
     if(imc >= 24.9) {
        return nivel[2];
    }  
    if(imc >= 18.5) {
        return nivel[1];
    }  
    if(imc < 18.5) {
        return nivel[0];
    }
}

// Calcula meu IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function setResult(msg, isValid) {
    const result = document.querySelector('#resultado');
    result.innerHTML = '';


    const p = createP();

    if(isValid) {
        p.classList.add('paragrafo-result');
    } else {
        p.classList.add('paragrafo-result-error');
    }

    p.innerHTML = msg;
    // Indica ao Js que você quer adicionalo ao result
    result.appendChild(p);
}

function createP (){
        // Cria um paragrafo
        const p = document.createElement('p');
        return p;
}