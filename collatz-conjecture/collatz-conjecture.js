export const steps = (number) => {
  if (number <= 0) throw new Error('Only positive numbers are allowed');
  let step = 0;
  while (number !== 1) {
    if (number % 2 === 0) {
      number = number / 2;
    } else number = (3 * number) + 1;
    step++;
  }
  return step;
};

