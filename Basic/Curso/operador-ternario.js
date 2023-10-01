// ? :
// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';


const pontuacaoUser = 1000;

// Linha de código é igual a inferior if else
const nivelUser = pontuacaoUser >= 1000 ? 'User VIP' : 'User Padrão';


// if(pontuacaoUser >= 1000) {
    // console.log('User VIP');
// } else {
    // console.log('User Padrão');
// }

// Setando valor padrão caso ela seja nula (Fallback)
const corUser = null;
const corPadrao = corUser || 'Preta';

console.log(nivelUser, corPadrao);