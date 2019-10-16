//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigasecond = (date) => {
  var newdate = date.getTime() + 1000000000000;
  return new Date(newdate)

};

console.log(gigasecond())
