/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { toast } from 'react-toastify';

export const apiErrorHandler = (error, showToast = true) => {
  let message = 'Something wrong';

  if (error.response) {
    message = error.response.data.error_description;
  } else if (error.request) {
    message = error.request._response;
  } else {
    message = error.message;
  }

  if (showToast) {
    toast.error(message);
  }

  return message;
};

export const getParamsFormObject = (filters) => {
  for (const key in filters) {
    const value = String(filters[key]);
    if (!value) {
      delete filters[key];
    }
  }

  // filters = { limit: 100000, offset: 0, ...filters };

  const searchParams = new URLSearchParams(filters);

  return `?${searchParams.toString()}`;
};

export const removeDataInObject = (obj) => {
  Object.keys(obj)
    .forEach((key) => (
      obj[key] === ''
      || obj[key] === undefined
      || obj[key].length === 0
        ? delete obj[key] : {}));

  return obj;
};

export default apiErrorHandler;
