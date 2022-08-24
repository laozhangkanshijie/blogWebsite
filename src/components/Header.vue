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
    </div>
  </div>
</template>

<script>
export default {
  neme: 'header'
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
