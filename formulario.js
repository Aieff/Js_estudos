// Não poderá ser acessado pelo escopo Global evitando erros de declarações de variaveis

function escopo() {
    const form = document.querySelector('.form'); // Seleciona o form pela classe
    const resultado = document.querySelector('.resultado');

    const pessoa = []; // Array onde vamos salvar os dados

        function recebeForms(event) {

            event.preventDefault();

            const nome = form.querySelector('.nome'); // Seleciona o input que está dentro do form
            const sobrenome = form.querySelector('.sobrenome'); 
            const peso = form.querySelector('.peso'); 
            const altura = form.querySelector('.altura'); 


            // Enviando o objeto através do push
            pessoa.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            });

            console.log(nome.value, sobrenome.value, peso.value, altura.value);

            resultado.innerHTML += `<p>Nome: ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Peso: ${peso.value} <br> Altura: ${altura.value}</p>`
        }

        form.addEventListener('submit', recebeForms);
    };


escopo();