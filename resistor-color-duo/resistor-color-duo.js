//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
import { COLORS } from '../resistor-color/resistor-color';

export const value = ([color1, color2]) => {
  let code1 = COLORS.indexOf(color1)
  let code2 = COLORS.indexOf(color2)
  return 10 * code1 + code2

};
