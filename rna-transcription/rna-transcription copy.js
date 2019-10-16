//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const toRna = (nucleo) => {
  let rna = '';
  for (i = 0; i < nucleo.length; i++) {
    switch (nucleo[i]) {
      case 'G':
        rna += 'C'
        break;
      case 'C':
        rna += 'G'
        break;
      case 'T':
        rna += 'A'
        break;
      case 'A':
        rna += 'U'
        break;
      case '':
        rna
    }
  }
  return rna
};
console.log(toRna('A'))
console.log(toRna('G'))
console.log(toRna('T'))
console.log(toRna(''))