export const encode = (input) => {
  let prevChar = ''
  let counter = 1
  let output = ''
  for (const char of input) {
    if (prevChar === char) {
      counter++
    } else {
      output += (counter > 1) ? counter.toString() + prevChar : prevChar
      prevChar = char
      counter = 1
    }
  }
  output += (counter > 1) ? counter.toString() + prevChar : prevChar
  return output
}

export const decode = (input) => {
  let output = ''
  let num = '';
  for (const char of input) {
    if (char.match(/\d/)) {
      num += char
    } else if (num === '') {
      output += char
    } else {
      for (let i = 0; i < parseInt(num); i++) {
        output += char
      }
      num = ''
    }
  }
  return output
}