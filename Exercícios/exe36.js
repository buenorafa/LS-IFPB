function cipher(text, num) {
  result = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const lastIndex = alphabet.length - 1;
  text = text.split("");
  // P/ cada letra do parâmetro de texto, será verificado se a soma do index da letra com o parâmetro numérico é maior que o index da letra 'z', se for maior subtraímos dessa soma o index de 'z' menos 1 (pois o array começa no indice 0), caso contrário basta adicionar ao index da letra o parâmetro numérico
  for (let letter of text) {
    if (alphabet.indexOf(letter) + num > lastIndex) {
      const rotIndex = alphabet.indexOf(letter) + num - lastIndex - 1;
      result += alphabet[rotIndex];
    } else {
      result += alphabet[alphabet.indexOf(letter) + num];
    }
  }
  return result;
}

console.log(cipher("abc", 2)); //  cde
console.log(cipher("xyz", 2)); //  zab
console.log(cipher("abc", 13)); //  nop
console.log(cipher("xyz", 13)); //  klm
