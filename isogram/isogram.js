export const isIsogram = (input) => {
  let inputArr = input.toLowerCase().split('')
  let tmp
  while (inputArr[0] !== undefined) {
    tmp = inputArr[0]
    inputArr.splice(0, 1)
    if (inputArr.includes(tmp) && tmp !== '-' && tmp !== ' ') {
      return false
    }
  }
  return true
};
