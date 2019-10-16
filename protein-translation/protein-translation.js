export const translate = (input) => {
  let output = ''
  if (input === undefined) return []
  for (let i = 0; i < input.length; i = i + 3) {
    if (!CODON.has(input[i + 0] + input[i + 1] + input[i + 2])) {
      throw 'Invalid codon'
    }
    let amino = CODON.get(input[i + 0] + input[i + 1] + input[i + 2])
    if (amino === 'STOP') {
      return [...output]
    } else {
      output = [...output, amino]
    }
  }
  return output
}

const codonHas = (input) => {
  return CODON.has(input)
}

const CODON = new Map([
  ['AUG', 'Methionine'],
  ['AUG', 'Methionine'],
  ['UUU', 'Phenylalanine'],
  ['UUC', 'Phenylalanine'],
  ['UUA', 'Leucine'],
  ['UUG', 'Leucine'],
  ['UCU', 'Serine'],
  ['UCC', 'Serine'],
  ['UCA', 'Serine'],
  ['UCG', 'Serine'],
  ['UAU', 'Tyrosine'],
  ['UAC', 'Tyrosine'],
  ['UGU', 'Cysteine'],
  ['UGC', 'Cysteine'],
  ['UGG', 'Tryptophan'],
  ['UAA', 'STOP'],
  ['UAG', 'STOP'],
  ['UGA', 'STOP']
])
