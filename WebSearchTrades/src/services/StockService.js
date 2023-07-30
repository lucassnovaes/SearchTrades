import axios from "axios";
import Stock from "../entities/Stock";
import config from "../config";

class SockService {
  constructor(user, Axios = axios) {
    // if (!user) throw new Error("user access token not informed");

    this._httpClient = Axios.create({
      baseURL: config.stockAPI,
      headers: {
        auth: user.getAccessToken()
      }
    });
  }

  async getStocks() {
    return Promise.resolve(
      [
        {
          name: "Company A",
          code: "COMP-A",
          price: 100.25,
          variation: "+2.5%"
        },
        {
          name: "Company B",
          code: "COMP-B",
          price: 75.5,
          variation: "-1.2%"
        }
        // Adicione mais objetos de ação aqui, se necessário
      ].map(Stock.fromObject)
    );
    const response = await this._httpClient.get("/stock", { headers: {} });

    return response.data.map(Stock.fromObject);
  }
}

export default SockService;
