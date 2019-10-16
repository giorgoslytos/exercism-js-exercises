export class Matrix {
  constructor(input) {
    this.matrix = input.split('\n')
    this.row = []
    for (let i = 0; i < this.matrix.length; i++) {
      this.row[i] = this.matrix[i].split(' ').map(x => parseInt(x, 10))
    }
  }

  get rows() {
    return this.row
  }

  get columns() {
    let col = []
    for (let i = 0; i < this.row[0].length; i++) {
      col[i] = []
      for (let j = 0; j < this.row.length; j++) {
        col[i][j] = this.row[j][i];
      }
    }
    return col
  }
}
