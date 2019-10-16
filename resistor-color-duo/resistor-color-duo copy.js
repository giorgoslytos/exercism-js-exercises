//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const value = (colors) => {
  let output = '';
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < COLORS.length; j++) {
      if (colors[i].toLowerCase() === COLORS[j]) {
        output = output + j.toString();
      }
    }
  }
  output = output.substr(0, 2)

  return output;
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

console.log(value(['brown', 'black']))
console.log(value(['green', 'brown', 'orange']))