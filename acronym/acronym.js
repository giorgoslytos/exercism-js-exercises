export const parse = (input) => {
  let inputArr = input
    .toUpperCase()
    .split(' ')
    .filter(x => x !== '_' && x !== ',' && x !== '-')
  console.log(inputArr)
  let output = ''

  for (let word of inputArr) {
    let wordArr = word
      .split('-')

    console.log(wordArr)
    for (let substring of wordArr) {
      let subchars = substring.split('').filter(x => x !== '_')
      output += subchars[0]
    }
  };
  return output;
}
