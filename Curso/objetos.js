// Objeto literal

const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira',
    idade: 20
};

const pessoa2 = {
    nome: 'Alexandre',
    sobrenome: 'Fernades',
    idade: 22
};

pessoa1.nome; // acessa o nome da pessoa do objeto (pessoa1)
console.log(pessoa1.sobrenome);


// Cria objetos através de uma função passando os valores por parametro
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa3 = criaPessoa('Luiz', 'Otávio', 25); 
console.log(pessoa3.nome);


const pessoa4 = {
    nome: 'Camila',
    sobrenome: 'Soares',
    idade: 22,

    // metodo falar
    fala() {
        console.log(`${this.nome} ${this.sobrenome} a minha idade atual é ${this.idade}`); // This indica a pessoa 4 no caso o objeto referenciado
    },

    incrementaIdade() {
        this.idade++;
    }

};

pessoa4.hair = "Black";
// Aqui ele irá incrementar a idade a cada vez que ele for chamado
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

