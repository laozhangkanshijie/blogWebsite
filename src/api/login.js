import axios from '@/utils/request'

/**
 *
 * @param {*} sid 唯一标识
 * @returns
 */
const getCode = async (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}

/**
 *
 * @param {*} loginInfo 用户登录信息
 * @returns
 */
const login = async (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

/**
 *
 * @param {*} regInfo 用户注册信息
 * @returns
 */
const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

export { getCode, login ,reg}
