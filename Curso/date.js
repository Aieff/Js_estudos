// Função construtora
// const horaTres = 60 * 60 * 3 * 1000;

// const umDia = 60* 60 * 24 *1000;

// const data = new Date(0 + horaTres + umDia); // O (0) quer dizer 01/01/1970 Timestamp unix ou epoca unixw
// console.log(data.toString());

const data = new Date();
console.log(data.toString());

console.log("dia", data.getDate())
console.log("mês", data.getMonth())
console.log("ano", data.getFullYear())