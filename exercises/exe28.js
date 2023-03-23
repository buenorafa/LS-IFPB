function creatList(items, text = "Text") {
  let result = "<ul>\n";
  for (let i = 0; i < items; i++) {
    result += `  <li>${text} ${i + 1}</li>\n`;
  }
  result += "</ul>";
  return result;
}

console.log(creatList(5, "Item"));
