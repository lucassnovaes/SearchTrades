import axios from "axios";

class SockService {
  constructor(user, Axios = axios) {
    if (!user) throw new Error("user access token not informed");

    this._httpClient = Axios.create({
      baseURL: process.env.API,
      headers: {
        auth: user.getAccessToken()
      }
    });
  }

  async getStocks() {
    const response = await this._httpClient.get("/stock", { headers: {} });

    return response.data;
  }
}

export default SockService;
