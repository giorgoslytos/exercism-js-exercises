//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  var newdate = date.getTime() + 1e12;
  return new Date(newdate)
};