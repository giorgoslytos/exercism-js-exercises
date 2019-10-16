export const isPangram = (sentence) => {
  return ALPHABET.every(letter => sentence.toLowerCase().includes(letter))
}
const ALPHABET = [...'abcdefghijklmnopqrstuwxyz'];
