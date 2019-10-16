//
// This is only a SKELETON file for the 'etl' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (input) => {
  let output = new Object();
  for (let row in input) {
    for (let [i, v] of input[row].entries()) {
      output[v.toLowerCase()] = matching[v.toLowerCase()]
    }
  }
  return output;
};

const matching = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

const old = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};
// console.log(transform(old));
// // for (let j of input[row]) {
// //   console.log(`${row[j].toLowerCase()} ${matching[row[j].toLowerCase()]}`)

// // }