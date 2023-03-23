function min(...args) {
  let min = args[0];
  for (let i of args) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}

function max(...args) {
  let max = args[0];
  for (let i of args) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}

//Estudar map(), reduce() ...
