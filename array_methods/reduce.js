/*
reduce() - 
*/

const rockets = [
  { country: "US", launches: 32 },
  { country: "Russia", launches: 27 },
  { country: "Japan", launches: 12 },
  { country: "China", launches: 28 },
];

const totalLaunches = rockets.reduce((val, elem) => val + elem.launches, 0);

console.log(totalLaunches);

//

const ages = [12, 22, 54, 100];

const sumAges = ages.reduce((val, elem) => val + elem, 0);
console.log(sumAges);
