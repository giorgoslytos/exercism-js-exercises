export const reverseString = (input) => {
  let output = '';
  input = input.split('');
  for (let i = input.length - 1; i >= 0; i--) {
    output += input[i]
  }
  return output;
};
