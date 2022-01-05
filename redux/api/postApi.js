import axiosClient from '../utils/axios';

const endpoit = 'https://jsonplaceholder.typicode.com/posts';

export default {
  async getAllPosts() {
    const path = endpoit;
    const response = await axiosClient.get(`${path}`);

    return response.data.slice(0, 10);
  },

  async getPostBySlug(slug) {
    const path = `${endpoit}/${slug}`;
    const response = await axiosClient.get(`${path}`);

    return response.data;
  },
};
