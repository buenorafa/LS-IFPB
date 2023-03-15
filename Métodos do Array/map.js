/* 

map() - O map percorre cada elemento do array e executa uma função ou expressão que deve ser passada como parâmetro do método map.
Irá retornar um array de mesmo tamanho. 

*/
/*
1.
No caso abaixo, temos uma array numbers com alguns numeros nele e queremos que o array doubledNumbers receba o dobro de cada elemento do numbers. Utilizamos o método map() para acessar cada elemento do array numbers, e passamos uma arrow function que nos retorna o dobro de cada elemento.
*/
const numbers = [10, 15, 20, 25, 30, 35];
const doubledNumbers = numbers.map((num) => num * 2);
// console.log(numbers);
// console.log(doubledNumbers);

/*
2.
 No caso abaixo iremos transformar um array de valores em kilômetros para milhas
 Sabemos que 1 km equivale a 0,6214 mi
*/
function kmToMi(val) {
  return val * 0.6214;
}
const km = [10, 100, 355, 27];
const mi = km.map(kmToMi);
// console.log(km);
// console.log(mi);
