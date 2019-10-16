export const matchingBrackets = (inputStr) => {
  let matchingObj = {
    'curly': { flag: 0, open: false },
    'square': { flag: 0, open: false },
    'bracket': { flag: 0, open: false }
  }
  let inputArr = inputStr.split('')

  for (let [i, bracket] of inputArr.entries()) {
    if (bracket === '(') {
      matchingObj.curly.flag += 1;
      matchingObj.curly.open = true;
    }
    if (bracket === ')') {
      if (inputArr[i - 1] === '['
        || inputArr[i - 1] === '{')
        return false
      matchingObj.curly.flag -= 1;
      matchingObj.curly.open = false;
    }
    if (bracket === '[') {
      matchingObj.square.flag += 1;
      matchingObj.square.open = true;
    }
    if (bracket === ']') {
      if (inputArr[i - 1] === '('
        || inputArr[i - 1] === '{')
        return false
      matchingObj.square.flag -= 1;
      matchingObj.square.open = false;
    }
    if (bracket === '{') {
      matchingObj.bracket.flag += 1;
      matchingObj.bracket.open = true;
    }
    if (bracket === '}') {
      if (inputArr[i - 1] === '['
        || inputArr[i - 1] === '(')
        return false
      matchingObj.bracket.flag -= 1;
      matchingObj.bracket.open = false;
    }
  }
  if (matchingObj.bracket.open === false
    && matchingObj.bracket.flag === 0
    && matchingObj.square.open === false
    && matchingObj.square.flag === 0
    && matchingObj.curly.open === false
    && matchingObj.curly.flag === 0)
    return true
  else return false
}
