const API_URL = 'http://localhost/digitalent/test-technique/backend/api/user/';
export default {
  async get(endpoint, token) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`${API_URL}/${endpoint}`, requestOptions);
    return handleResponse(response);
  },

  async post(endpoint, body, token = '') {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    };
    const response = await fetch(`${API_URL}/${endpoint}`, requestOptions);
    return handleResponse(response);
  },
};

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    return {
      ok: response.ok,
      status: response.status,
      ...data,
      message: data.message || null,
    };
  });
}
