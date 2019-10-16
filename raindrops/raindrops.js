//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (number) => {
  let factor = []
  let output = ''
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      factor.push(i)
    }
  }
  if (factor.includes(3)) {
    output += 'Pling'
  }
  if (factor.includes(5)) {
    output += 'Plang'
  }
  if (factor.includes(7)) {
    output += 'Plong'
  }
  if (!factor.includes(3) && !factor.includes(5) && !factor.includes(7)) {
    output = number.toString()
  }
  return output
};