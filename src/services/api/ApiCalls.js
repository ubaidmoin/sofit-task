import { get } from 'axios';

export const getData = async (url) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*'
    }
  };
  try {
    const response = await get(url, options).then((res) => res);
    return { status: response.status, data: response.data };
  } catch (err) {
    return { status: 0, data: null };
  }
};