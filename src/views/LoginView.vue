<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
        </ul>
        <div class="layui-container">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form
              class="layui-form layui-form-pane"
              action=""
              @submit.prevent="handleSubmit(submit)"
            >
              <div class="layui-form-item">
                <label class="layui-form-label">账号</label>
                <div class="layui-input-block">
                  <ValidationProvider name="username" rules="required|email" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        v-model.trim="username"
                        placeholder="请输入账号"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>

                    <div class="layui-form-mid">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <div class="layui-form-item">
                <label class="layui-form-label">密码</label>
                <div class="layui-input-block">
                  <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="password"
                        v-model="password"
                        required
                        lay-verify="required"
                        placeholder="请输入密码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>

                    <div class="layui-form-mid">
                      <span style="color: #c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
              </div>
              <div class="layui-form-item">
                <div class="layui-row">
                  <label class="layui-form-label">验证码</label>
                  <div class="layui-input-inline">
                    <ValidationProvider name="code" rules="required|min:4" v-slot="{ errors }">
                      <div class="layui-input-inline">
                        <input
                          type="text"
                          name="title"
                          v-model="code"
                          placeholder="请输入验证码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="layui-form-mid svg" @click="getCaptcha" v-html="svg"></div>
                </div>
              </div>
            <button type="submit" class="layui-btn">点击登录</button>
            <a class="front-link" href="">忘记密码</a>
            </form>
          </ValidationObserver>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode, login } from '@/api/login'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'loginView',
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data() {
    return {
      username: '',
      password: '',
      svg: '',
      code: ''
    }
  },
  mounted() {
    window.vue = this
    let sid = ''
    if (localStorage.getItem('sid')) {
      sid = localStorage.getItem('sid')
    } else {
      sid = uuidv4()
      localStorage.setItem('sid', sid)
    }
    this.$store.commit('setSid', sid)
    this.getCaptcha()
  },
  methods: {
    getCaptcha() {
      const sid = this.$store.state.sid
      this.sid = sid
      getCode(sid).then((res) => {
        if (res.code === 200) this.svg = res.data
      })
    },
    submit() {
      console.log('submi event')
      login({
        username: this.username,
        password: this.password,
        code: this.code,
        sid: this.sid
      }).then(res => {
        if (res.code === 200) {
          console.log(res);
          this.username = ''
          this.password = ''
          this.code = ''
        } else if( res.code === 401) {
          this.$alert(res.msg)
        } else {
          // res.msg = {username: [] , name: [], code}
          this.$refs.form.setErrors(res.msg);
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-container {
  background: #fff;
}
input {
  width: 190px;
}

.front-link {
  margin-left: 10px;
  &:hover {
    color: #009688;
  }
}

.svg {
  position: relative;
  top: -15px;
}
</style>
