export const validate = (num) => {
  let result = 0;
  let numLength = num.toString().length;
  for (const digit of num.toString()) {
    result += digit ** numLength
  }
  return result === num
};
