import axios from "axios";
import config from "../config";

class AuthService {
  constructor() {
    this._httpClient = axios.create({ baseURL: config.authURL });
  }

  async encript({ Username, Password }) {
    const response = await this._httpClient.get("/api/Authenticate/Encript", {
      params: { user: Username, password: Password }
    });

    const accessToken = await this.authenticate(response.data);

    return accessToken;
  }

  async authenticate(accessToken) {
    const response = await this._httpClient.get("/api/Authenticate", {
      headers: { auth: accessToken }
    });

    return response.data;
  }
}

export default AuthService;
