/*
filter() - chama a função callback fornecida, uma vez para cada elemento do array, e constrói um novo array com todos os valores para os quais o callback retornou o valor true ou um valor que seja convertido para true
*/

const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter(function oddNumber(value) {
  if (value % 2 != 0) {
    return value;
  }
});
console.log(oddNumbers);
