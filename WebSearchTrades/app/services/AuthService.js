import axios from "axios";

class AuthService {
  constructor(Axios = axios) {
    this._httpClient = Axios.create(process.env.API);
  }

  async authenticate({ username, password }) {
    const response = await this._httpClient.get("/encript", {
      params: { username, password }
    });

    return response.data;
  }
}

export default AuthService;
