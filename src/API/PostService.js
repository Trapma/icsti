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

    const task_id = response.data.task_id;
    return this.getTask(task_id);
  }

  static async getTask(task_id) {
    const timer = setTimeout(async () => {
      const response = await axios.get(`${API_ICSTI}/search/result`, {
        params: {
          task_id,
        },
      });
      // если нет данных сбрасываем таймер и возвращаем ошибку (обрабатывается в hooks)
      if (!response.data) {
        clearTimeout(timer);
        return response;
      }

      if (response.data.task_status === "SUCCESS") {
        clearTimeout(timer);
        return response;
      }
    }, 500);
  }
}
