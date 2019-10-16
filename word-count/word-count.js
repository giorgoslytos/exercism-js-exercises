export class Words {
  count(input) {
    let words = input.toLowerCase().split(/\s+/)
    let counts = new Object()
    for (let word of words) {
      if (word !== '') {
        if (counts.hasOwnProperty(word)) {
          counts[word]++
        } else
          counts[word] = 1
      }
    }
    return counts
  }
}