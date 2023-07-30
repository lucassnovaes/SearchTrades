class Stock {
  constructor(stock, name, close, change, volume, market_cap, logo, sector) {
    this.stock = stock;
    this.name = name;
    this.close = close;
    this.change = change;
    this.volume = volume;
    this.market_cap = market_cap;
    this.logo = logo;
    this.sector = sector;
  }

  getPrice() {
    return `R$ ` + this.close.replace(".", ",");
  }

  static fromObject({
    stock,
    name,
    close,
    change,
    volume,
    market_cap,
    logo,
    sector
  }) {
    return new Stock(
      stock,
      name,
      close,
      change,
      volume,
      market_cap,
      logo,
      sector
    );
  }
}

export default Stock;
