import axios from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  validateStatus: (status) => status >= 200 && status < 400,
});

export async function getAllPosts() {
  const endpoit = 'https://jsonplaceholder.typicode.com/posts';
  const path = endpoit;
  const response = await axiosClient.get(`${path}`);

  return response.data.slice(0, 10);
}

export async function getPostBySlug(slug) {
  const endpoit = 'https://jsonplaceholder.typicode.com/posts';
  const path = `${endpoit}/${slug}`;
  const response = await axiosClient.get(`${path}`);

  return response.data;
}

