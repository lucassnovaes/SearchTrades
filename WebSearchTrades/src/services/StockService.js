import axios from "axios";
import Stock from "../entities/Stock";
import config from "../config";

class SockService {
  constructor(user, Axios = axios) {
    // if (!user) throw new Error("user access token not informed");

    this._httpClient = Axios.create({
      baseURL: config.stockAPI,
      headers: {
        auth: user?.getAccessToken()
      }
    });
  }

  async getStocks() {
    const response = await this._httpClient.get("/FindAllTickers", {
      headers: {}
    });

    return response.data.stocks.map(Stock.fromObject);
  }

  async getStocksByName(name) {
    const response = await this._httpClient.get("/FindByTicker", {
      headers: {},
      params: { ticker: name }
    });

    // return Stock.fromObject(response.data[0]);
    return response.data.results[0];
  }
}

export default SockService;
