export const classify = (number) => {
  let aliquotSum = 0;
  if (number <= 0) {
    throw 'Classification is only possible for natural numbers.'
  }
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      aliquotSum += i
    }
  }
  if (aliquotSum === number) {
    return 'perfect'
  }
  if (aliquotSum > number) {
    return 'abundant'
  } else return 'deficient'
};
