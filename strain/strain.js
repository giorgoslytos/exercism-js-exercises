export const keep = (inputArr, op) => {
  let output = []
  if (inputArr.length !== 0) {
    if (typeof op === 'function') {
      for (let num of inputArr) {
        if (op(num)) {
          output.push(num)
        }
      }
    }
  }
  return output
}

export const discard = (inputArr, op) => {
  let output = []
  if (inputArr.length !== 0) {
    if (typeof op === 'function') {
      for (let num of inputArr) {
        if (!op(num)) {
          output.push(num)
        }
      }
    }
  }
  return output
}
