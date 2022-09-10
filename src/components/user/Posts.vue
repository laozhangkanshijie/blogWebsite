<template>
  <div class="fly-panel fly-panel-user pd2">
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li><router-link :to="{ name: 'mypost' }">我的发帖</router-link></li>
        <li><router-link :to="{ name: 'mycollection' }">我收藏的贴</router-link></li>
      </ul>

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
