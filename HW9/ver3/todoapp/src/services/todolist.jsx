import api from './configApi';

export class ToDoListService {
  static async getTasks() {
    return await api.get("/api/tasks")
      .then((res) => {
        return Promise.resolve(res.data)
      })
      .catch((e) => {
        return Promise.reject(e?.response?.data);
      })
  }
  static async createTask(data) {
    return await api.post("/api/tasks", data)
      .then((res) => {
        return Promise.resolve(res.data)
      })
      .catch((e) => {
        return Promise.reject(e?.response?.data);
      })
  }
  static async updateTask(id, data) {
    return await api.put(`/api/tasks/${id}`, data)
      .then((res) => {
        return Promise.resolve(res.data)
      })
      .catch((e) => {
        return Promise.reject(e?.response?.data);
      })
  }
}

