// Primitivo (Imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

// Referência (mutável) - array, object, function - passado por referência

const a = {
    nome: 'Gabriel',
    sobrenome: 'Oliveira'
};

// const b = a;

// Copiar o valor sem apontarem para o mesmo local da memoria
const b = {...a};

a.nome = 'João';
console.log(a);
console.log(b);