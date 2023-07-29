class User {
  constructor(username, password, role) {
    this.username = username;
    this._password = password;
    this.role = role;
  }

  static fromObject({ username, password, role }) {
    return new this(username, password, role);
  }

  setToken({ Expiration, AccessToken }) {
    this._expiration = Expiration;
    this._accessToken = AccessToken;
  }

  getAccessToken() {
    return this._accessToken;
  }

  toString() {
    return JSON.stringify(this);
  }
}

export default User;
