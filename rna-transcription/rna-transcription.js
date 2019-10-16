//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleo) => {
  let nucleos = nucleo.split('');
  nucleos = nucleos.map(x => TRANSCRIPTIONS[x])
  return nucleos.join('');
};

const TRANSCRIPTIONS = { C: 'G', G: 'C', T: 'A', A: 'U' };