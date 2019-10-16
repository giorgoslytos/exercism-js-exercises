export class PhoneNumber {
  constructor(input) {
    this.tel = input
  }

  number() {
    let output = ''
    for (let i = 0; i < this.tel.length; i++) {
      if (this.tel[i].match(/[a-zA-Z@:!]/))
        return null
      if (this.tel[i] === '(' && (this.tel[i + 1] === '0' || this.tel[i + 1] === '1'))
        return null
      if (this.tel[i] === ')' && (this.tel[i + 2] === '0' || this.tel[i + 2] === '1'))
        return null
      if (this.tel[i].match(/\d/))
        output = output + this.tel[i]
    }
    if (output.length === 10) {
      return output
    }
    if (output.length === 11 && output[0] === '1') {
      output = output.substr(1)
      return output
    }
    else return null
  }
}
