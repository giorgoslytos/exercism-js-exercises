export class Series {
  constructor(input) {
    this.arr = input.split('').map(x => Number(x))
  }

  get digits() {
    return this.arr
  }

  slices(num) {
    let output = []
    if (this.arr.length - num >= 0) {
      for (let i = 0; i <= this.arr.length - num; i++) {
        let tmp = []
        for (let j = 0; j < num; j++) {
          tmp = [...tmp, this.arr[i + j]]
        }
        output.push(tmp)
      }
      return output
    } else throw 'Slice size is too big.'
  }
}