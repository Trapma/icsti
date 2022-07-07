import axios from "axios";
import config from "../config";

const API_HOST = config.api_host;

export default class PostService {
  static async getAll() {
    const response = await axios.get(`${API_HOST}/tasks`);
    return response.data;
  }
}
