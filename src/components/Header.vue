<template>
  <div class="fly-header layui-bg-black">
    <div class="layui-container">
      <a class="fly-logo d-flex flex-center" href="">
        <img src="../assets/logo.png" alt="" />
      </a>
      <ul class="layui-nav" lay-filter="">
        <li class="layui-nav-item"><a href="">最新活动</a></li>
        <li class="layui-nav-item layui-this"><a href="">产品</a></li>
        <li class="layui-nav-item"><a href="">大数据</a></li>
      </ul>
      <ul class="layui-nav fly-nav-user">
        <!-- 未登入的状态 -->
        <template v-if="!isShow">
          <li class="layui-nav-item">
            <a class="iconfont icon-touxiang layui-hide-xs" to="/user123123"></a>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'login' }">登入</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{ name: 'reg' }">注册</router-link>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
              title="QQ登入"
              class="iconfont icon-qq"
            ></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a
              href
              onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
              title="微博登入"
              class="iconfont icon-weibo"
            ></a>
          </li>
        </template>

        <!-- 登入后的状态 -->
        <template v-else>
          <!-- 调整了Hover的区域 -->
          <li class="layui-nav-item" @mouseover="toggle(true)" @mouseleave="toggle(false)">
            <a class="fly-nav-avatar" :to="{ name: 'center' }">
              <cite class="layui-hide-xsm.md">{{ userInfo.name }}</cite>
              <!-- <i class="iconfont icon-renzheng layui-hide-xs" title="认证信息：layui 作者"></i> -->
              <i class="layui-badge fly-badge-vip layui-hide-xs" v-show="userInfo.isVip !== '0'"
                >VIP{{ userInfo.isVip }}</i
              >
              <img :src="userInfo.pic" />
            </a>
            <dl class="layui-nav-child layui-anim layui-anim-upbit" :class="{ 'layui-show': on }">
              <dd>
                <a :to="{ name: 'info' }"> <i class="layui-icon">&#xe620;</i>基本设置 </a>
              </dd>
              <dd>
                <a :to="{ name: 'msg' }">
                  <i class="iconfont icon-tongzhi" style="top: 4px"></i>我的消息
                </a>
              </dd>
              <dd>
                <a :to="{ name: 'home', params: { uid: userInfo._id } }">
                  <i class="layui-icon" style="margin-left: 2px; font-size: 22px">&#xe68e;</i
                  >我的主页
                </a>
              </dd>
              <hr style="margin: 5px 0" />
              <dd>
                <a href="javascript: void(0)" style="text-align: center" @click="logout()">退出</a>
              </dd>
            </dl>
          </li>
          <!-- <div class="fly-nav-msg" v-show="num.message && num.message !== 0">
            {{ num.message }}
          </div>
          <transition name="fade">
            <div class="layui-layer-tips" v-show="hasMsg">
              <div class="layui-layer-content">
                您有{{ num.message }}条未读消息
                <i class="layui-layer-TipsG layui-layer-TipsB"></i>
              </div>
            </div>
          </transition> -->
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  neme: 'header',
  data() {
    return {
      on: false
    }
  },
  computed: {
    isShow() {
      return this.$store.state.isLogin
    },
    userInfo() {
      return (
        this.$store.state.userInfo || {
          name: '',
          pic: '',
          isVip: 0
        }
      )
    }
  },
  methods: {
    toggle(value) {
      setTimeout(() => {
        this.on = value
      }, 200)
    },
    logout() {
      this.$confirm('确定退出吗？', () => {
        localStorage.clear()
        store.commit('setToken', '')
        store.commit('setUserInfo', '')
        store.commit('setIsLogin', false)
        this.$router.push('/')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-container {
  display: flex;
}
.fly-logo {
  left: -15px;
  top: -10px;
  margin-left: 15px;
  img {
    width: 40px;
  }
}
</style>
