function camelCase(text) {
  let result = "";
  text = text.toLowerCase().split(" ");
  for (let i of text) {
    let aux = i.split("");
    aux[0] = aux[0].toUpperCase();
    result += `${aux.join("")} `;
  }
  return result.trimEnd();
}
function countWord(text) {
  text = text.split("");
  let count = 1;
  for (let i of text) {
    if (i == "\n" || i == " " || i == "\t") {
      count++;
    }
  }
  return count;
}
function formatter(text, action) {
  let result = "";
  switch (action) {
    case "uppercase":
      result = text.toUpperCase();
      break;
    case "lowercase":
      result = text.toLowerCase();
      break;
    case "camelcase":
      result = camelCase(text);
      break;
    case "snakecase":
      result = text.replaceAll(" ", "_");
      break;
    case "reverse":
      result = text.split("").reverse().join("");
      break;
    case "countchar":
      result = text.length;
      break;
    case "countword":
      result = countWord(text);
      break;
    case "countline":
      result = text.split("\n").length;
  }
  return result;
}

console.log(formatter("lorem ipsum dolor", "uppercase")); //	"LOREM IPSUM DOLOR"
console.log(formatter("LOREM IPSUM DOLOR", "lowercase")); //	"lorem ipsum dolor"
console.log(formatter("LOREM IPSUM DOLOR", "camelcase")); //	"Lorem Ipsum Dolor"
console.log(formatter("lorem ipsum dolor", "snakecase")); //	"lorem_ipsum_dolor"
console.log(formatter("lorem ipsum dolor", "reverse")); //	"rolod muspi merol"
console.log(formatter("lorem\nipsum dolor", "countchar")); //	17
console.log(formatter("lorem\nipsum dolor", "countword")); //	3
console.log(formatter("lorem\nipsum dolor", "countline")); //   2
