export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0)
      throw new Error('Triangle › test triangles with no size are illegal')
    if (!(this.side1 + this.side2 >= this.side3) || !(this.side1 + this.side3 >= this.side2) || !(this.side2 + this.side3 >= this.side1))
      throw new Error('input violates triangle inquality')
  }

  kind() {
    if (this.side1 + this.side2 === this.side3 || this.side1 + this.side3 === this.side2 || this.side2 + this.side3 === this.side1)
      return 'degenerate'
    else if ((this.side1 === this.side2) && (this.side1 === this.side3))
      return 'equilateral'
    else if (this.side1 === this.side2 || this.side1 === this.side3 || this.side2 === this.side3)
      return 'isosceles'
    else if (this.side1 + this.side2 > this.side3 || this.side1 + this.side3 > this.side2 || this.side2 + this.side3 > this.side1)
      return 'scalene'
    else if (this.side1 + this.side2 > this.side3 || this.side1 + this.side3 > this.side2 || this.side2 + this.side3 > this.side1)
      return 'scalene'
  }
}
