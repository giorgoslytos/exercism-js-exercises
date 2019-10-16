export class HighScores {
  constructor(input) {
    this.input = input
  }

  get scores() {
    return [...this.input]
  }

  get latest() {
    return [...this.input].pop()
  }

  get personalBest() {
    return Math.max(...this.input)
  }

  get personalTopThree() {
    let tmp = [...this.input]
    let output = []
    for (let i = 0; i < 3; i++) {
      let maxnumber = Math.max(...tmp)

      output.push(...tmp.splice((tmp.indexOf(maxnumber)), 1))
    }
    return output
  }
}
