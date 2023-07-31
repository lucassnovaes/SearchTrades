class User {
  constructor(username, password, role) {
    this.username = username;
    this._password = password;
    this.role = role;
  }

  static fromObject({ username, password, role }) {
    return new this(username, password, role);
  }

  setToken({ expiration, accessToken }) {
    this._expiration = expiration;
    this._accessToken = accessToken;
  }

  getAccessToken() {
    return this._accessToken;
  }

  toString() {
    return JSON.stringify(this);
  }

  toObj() {
    return {
      password: this._password,
      username: this.username,
      accessToken: this._accessToken,
      expiration: this._expiration
    };
  }
}

export default User;
