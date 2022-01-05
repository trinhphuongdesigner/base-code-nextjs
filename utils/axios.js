import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  params: {
    lang: 'en',
  },
  validateStatus: (status) => status >= 200 && status < 400,
});

export const apiResponses = {
  ACCESS_SESSION_EXPIRED: 'Access session expired',
};

export const isInvalidRedirectResponse = (response) => {
  if (typeof response.data?.success === 'boolean'
    && !response.data.success
    && response.data.msg?.includes(apiResponses.ACCESS_SESSION_EXPIRED)
  ) {
    const redirectUri = response.request.responseURL.replace(process.env.REACT_APP_BASE_URL, '');

    if (response.config.headers.Authorization) {
      return { redirectUri };
    }
  }

  return false;
};

export default axiosClient;
