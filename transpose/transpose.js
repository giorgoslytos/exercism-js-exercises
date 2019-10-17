export const transpose = (input) => {
  if (input.length === 0) return []
  let inputLength = [];
  let output = []
  for (let i = 0; i < input.length; i++) {
    inputLength[i] = input[i].length
    output[i] = input[i].split('')
  }
  let indexOfMax = inputLength.indexOf(Math.max(...inputLength))
  output = output[indexOfMax]
    .map((col, c) => output.map((row, r) => row[c] || ' '))
    .map(x => x.join(''))

  output[output.length - 1] = output[output.length - 1].trimRight()
  return output
};