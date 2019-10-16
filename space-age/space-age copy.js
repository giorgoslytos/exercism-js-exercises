//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const age = (planet, ageSecs) => {
  let sec = .00000003169;
  switch (planet) {
    case 'earth':
      return (sec * ageSecs).toFixed(2);
    case 'mercury':
      //-------
      return (sec * ageSecs * .2408467).toFixed(2);
    case 'venus':
      return (sec * ageSecs * 0.61519726).toFixed(2);
    case 'mars':
      //-------
      return (sec * ageSecs * 1.8808158).toFixed(2);
    case 'jupiter':
      return (sec * ageSecs * 11.862615).toFixed(2);
    case 'saturn':
      return (sec * ageSecs * 29.447498).toFixed(2);
    case 'uranus':
      return (sec * ageSecs * 84.016846).toFixed(2);
    case 'neptune':
      return (sec * ageSecs * 164.79132).toFixed(2);
  }
};
console.log(age('mercury', 1000000000))
console.log('neptune' + age('neptune', 1821023456))
console.log(age('uranus', 1000000000))
console.log(age('jupiter', 1000000000))
console.log(age('earth', 1000000000))
console.log(age('mars', 1000000000))