import axios from "axios";
import qs from 'qs'

/**
 * 读取文章列表
 * @param {Object} options 读取文章列表接口参数
 * @returns
 */
const getList = (options) => {
  return axios.get('/public/list?'+ qs.stringify(options))
}

const getTips = () => {
  return axios.get('public/tips')
}

export {getList,getTips}
