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

  for (let letra of text) {
    if (alphabet.indexOf(letra) + num > lastIndex) {
      const rotIndex = alphabet.indexOf(letra) + num - lastIndex - 1;
      result += alphabet[rotIndex];
    } else {
      result += alphabet[alphabet.indexOf(letra) + num];
    }
  }
  return result;
}

console.log(cipher("abc", 2)); //cde
console.log(cipher("xyz", 2)); //zab
console.log(cipher("abc", 13)); //	nop
console.log(cipher("xyz", 13)); //	klm
