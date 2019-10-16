export class Anagram {
  constructor(word) {
    this.word = word;
  }

  normalize(word) {
    return word.toLowerCase().split('').sort().join('');
  }

  matches(wordArr) {
    const matchArr = [];
    for (let i = 0; i < wordArr.length; i++) {
      if (this.word.toLowerCase() === wordArr[i].toLowerCase()) {
        continue;
      }
      else if (this.normalize(this.word) === this.normalize(wordArr[i])) {
        matchArr.push(wordArr[i]);
      }
    }
    return matchArr;
  }
}