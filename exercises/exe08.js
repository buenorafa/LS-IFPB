function calc(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Operador inválido";
  }
}

console.log(calc(10, 5, "+"));
console.log(calc(10, 5, "-"));
console.log(calc(10, 5, "*"));
console.log(calc(10, 5, "/"));
console.log(calc(10, 5, "batatinha"));
