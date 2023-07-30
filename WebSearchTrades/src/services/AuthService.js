import axios from "axios";
import config from "../config";

class AuthService {
  constructor() {
    this._httpClient = axios.create({ baseURL: config.authURL });
  }

  async encript({ username, password }) {
    const response = await this._httpClient.get("/Authenticate/Encript", {
      params: { username, password }
    });

    return response.data;
  }

  async authenticate({ accessToken }) {
    const response = await this._httpClient.get("/Authenticate", {
      headers: { auth: accessToken }
    });

    return response.data;
  }
}

export default AuthService;
