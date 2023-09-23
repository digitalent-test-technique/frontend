const API_URL = 'https://digitalent.technicaltest.site/api/user';
export default {
  async get(endpoint) {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
    const response = await fetch(`${API_URL}/${endpoint}`, requestOptions);
    return handleResponse(response);
  },

  async post(endpoint, body) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
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
      data,
      message: data.message || null,
    };
  });
}
