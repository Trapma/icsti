import axios from "axios";
import config from "../config";

const API_HOST = config.api_host;
const API_ICSTI = config.icsti;

export default class PostService {
  static async getAll() {
    const response = await axios.get(`${API_HOST}/tasks`);
    return response.data;
  }

  static async getSearch(textSearch, isChecked) {
    const domain = isChecked ? "Zenodo" : "Core";
    console.log("domain test", domain);
    const response = await axios.get(`${API_HOST}/search`, {
      params: {
        query: textSearch,
      },
    });
    return response;
  }
  static async getNews() {
    const response = await axios.get(`${API_ICSTI}/news/list`);
    // const response = await axios.get(`${API_HOST}/news`);
    return response.data;
  }
}
