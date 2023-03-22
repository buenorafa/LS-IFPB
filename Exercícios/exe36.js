function cipher(text, num) {
  result = "";
  const table = [
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
  const lastIndex = table.length - 1;
  text = text.split("");
  for (let i of text) {
    if (table.indexOf(i) + num > lastIndex) {
      const aux = table.indexOf(i) + num - lastIndex - 1;
      result += table[aux];
    } else {
      result += table[table.indexOf(i) + num];
    }
  }
  return result;
}

console.log(cipher("abc", 2)); //cde
console.log(cipher("xyz", 2)); //zab
console.log(cipher("abc", 13)); //	nop
console.log(cipher("xyz", 13)); //	klm
