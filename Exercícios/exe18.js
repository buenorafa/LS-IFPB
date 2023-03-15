function sum(...args) {
  let sum = 0;
  for (let i of args) {
    sum += i;
  }
  return sum;
}

function sumOdds(...args) {
  sum = 0;
  for (let i of args) {
    if (i % 2 != 0) {
      sum += i;
    }
  }
  return sum;
}

function product(...args) {
  p = 1;
  for (let i of args) {
    p *= i;
  }
  return p;
}
console.log("sum: ");
console.log(sum(1, 2, 3));
console.log(sum(2, 2, 2));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log();
console.log("sumOdds");
console.log(sumOdds(1, 2, 3));
console.log(sumOdds(2, 2, 2));
console.log(sumOdds(1, 2, 3, 4, 5, 6));
console.log();
console.log("product: ");
console.log(product(1, 2, 3));
console.log(product(2, 2, 2));
console.log(product(1, 2, 3, 4, 5, 6));
