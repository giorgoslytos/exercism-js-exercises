export const accumulate = (array, callback) => {
  let output = []
  for (let cell of array) {
    output.push(callback(cell))
  }
  return output
};
