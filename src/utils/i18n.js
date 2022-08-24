import Vue from 'vue'
import {VueI18n} from 'vue-i18n'
import zh from 'vee-validate/dist/locale/zh_CN.json'


const i18n = new VueI18n({
  locale: 'zh_CN',
  messages: {
    zh_CN: {
      fields: {
        email: '邮箱',
        password: '密码',
        name: '昵称',
        username: '账号',
        code: '验证码'
      },
      validations: {
        ...zh.messages
      }
    }
  }
})

Vue.use(VueI18n)

export { i18n }
