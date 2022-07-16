import axios from "axios";
import config from "../config";

const API_HOST = config.api_host;
const API_ICSTI = config.icsti;

export default class PostService {
  // тестовые данные
  // static async getAll() {
  //   const response = await axios.get(`${API_HOST}/tasks`);
  //   return response.data;
  // }

  static async getSearchPost(textSearch, isChecked) {
    const domain = isChecked ? "zenodo" : "core";
    const response = await axios.get(`${API_ICSTI}/search/${domain}`, {
      params: {
        q: textSearch,
      },
    });
    return response;
  }

  static async getTask(taskId, page) {
    const response = await axios.get(`${API_ICSTI}/search/result`, {
      params: {
        task_id: taskId,
        page: page,
      },
    });
    return response;
  }

  // static async getPageTasks(limit = 10, page = 1) {
  //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
  //     params: {
  //       _limit: limit,
  //       _page: page,
  //     },
  //   });
  //   return response;
  // }
}
