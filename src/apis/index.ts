import axios, { AxiosRequestConfig } from "axios";

export const WINEAPI = axios.create({
  baseURL: "https://api.veenoverse.com/ssr/v2",
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
  responseType: "json",
});

interface ApiResponse<T = any> {
  data: T;
}

//GET 메서드
export const getData = async <T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
  try {
    const response = await WINEAPI.get(url, config);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
