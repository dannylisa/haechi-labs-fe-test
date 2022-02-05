import axios, { AxiosRequestConfig, AxiosInstance } from "axios";

const HOST = 'http://localhost:3001'

const ACCESS_TOKEN:string = process.env.REACT_APP_ACCESS_TOKEN ?? "";
const API_SECRET:string = process.env.REACT_APP_API_SECRET ?? "";

export const requestAPI = (): AxiosInstance => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "X-Henesis-Secret": API_SECRET,
  };
  const configs: AxiosRequestConfig = {
    headers,
  };

  const client = axios.create({
    baseURL: HOST,
    ...configs,
  });

  return client;
};