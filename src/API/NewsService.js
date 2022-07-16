import axios from "axios";
import config from "../config";

const API_HOST = config.api_host;
const API_ICSTI = config.icsti;

export default class NewsService {
  static async getNews() {
    // тестовые данные
    const response = await axios.get(`${API_HOST}/news`);

    // const response = await axios.get(`${API_ICSTI}/news/list`);
    return response;
  }
}
