export class Squares {
  constructor(number) {
    this.number = number
  }

  get sumOfSquares() {
    let output = 0;
    for (let i = 1; i <= this.number; i++) {
      output += i * i
    }
    return output
  }

  get squareOfSum() {
    let output = 0;
    for (let i = 1; i <= this.number; i++) {
      output += i
    }
    return output * output
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares
  }
}
