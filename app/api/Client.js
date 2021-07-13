import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.43.35:5000",
});

export default apiClient;
