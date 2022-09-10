<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul class="layui-nav layui-nav-tree">
      <li class="layui-nav-item" v-for="(item, index) in lists" :key="'center' + index">
        <router-link :to="{ name: item.link }">
          <i class="layui-icon" :class="item.icon"></i>
          {{ item.name }}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { link: 'center', name: '我的主页', icon: 'layui-icon-home' },
        { link: 'set', name: '基本设置', icon: 'layui-icon-set' },
        { link: 'mypost', name: '我的帖子', icon: 'layui-icon-form' },
        { link: 'msg', name: '我的消息', icon: 'layui-icon-reply-fill' },
        { link: 'others', name: '其他设置', icon: 'layui-icon-component' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.layui-icon {
  margin-right: 10px;
}
</style>
