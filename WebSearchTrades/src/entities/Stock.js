class Stock {
  constructor(name, code, price, variation) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.variation = variation;
  }

  static fromObject({ name, code, price, variation }) {
    return new this(name, code, price, variation);
  }
}

export default Stock;
