const url = `http://${process.env.REACT_APP_API_URL}/api`;

class Client {
  async submitCredentials(credentials) {
    await fetch(`${url}/new_account/`, {
      mode: 'cors',
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept":"application/json"
      }),
      body: JSON.stringify(credentials),
    });
  }
}

export default new Client();

