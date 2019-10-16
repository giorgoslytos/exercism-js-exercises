//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  let distance = 0;
  if (strand1 === '' && strand2 !== '') {
    throw 'left strand must not be empty'
  }
  if (strand2 === '' && strand1 !== '') {
    throw 'right strand must not be empty'
  }
  if (strand1.length !== strand2.length) {
    throw 'left and right strands must be of equal length'
  }
  for (let i = 0; i < strand1.length; i++) {
    if (strand1.substr(i, 1) !== strand2.substr(i, 1)) {
      distance += 1;
    }
  }
  return distance
};
