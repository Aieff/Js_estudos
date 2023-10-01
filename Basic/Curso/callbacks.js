// Callbakcs (func) parametro
//Map, filter, redux (Muito utilizado)

function mult(values, func) { // Passa a função como parametro
    for(let i = 1; i < values.length; i++) {
        values[i] = func(values[i])
        // values[i] *= values[i] //n *= n
    }
    return values
}

const values = [1, 4, 6, 8, 10]
const func = (n) => n * n  // Cria a função a ser passada

console.log(mult(values, func))