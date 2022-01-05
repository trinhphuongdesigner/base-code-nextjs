import axios from '../utils/axios';

const endpoit = '/users/';

export default {
  async getUsers(filter) {
    let { search } = filter;
    const path = endpoit;
    let response = await axios.get(`${path}?search=${search}`)
    return response.data;
  },

  async getUser(userId) {
    const path = `${endpoit}${userId}/`;
    let response = await axios.get(path);
    return response.data;
  },

  async updateUser(userId, option) {
    const path = `${endpoit}${userId}/`;
    let response = await axios.put(path, option);
    return response.data;
  },

  async deleteUser(userId) {
    const path = `${endpoit}${userId}/`;
    let response = await axios.delete(path);
    return response.data;
  },
}
