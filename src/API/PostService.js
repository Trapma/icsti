import axios from "axios";
import config from "../config";

const API_HOST = config.api_host;

export default class PostService {
  static async getAll() {
    try {
      const response = await axios.get(`${API_HOST}/posts`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
