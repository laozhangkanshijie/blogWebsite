import config from "@/config";
import HttpRequest from "./axios";

const baseURL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseURL)

export default axios
