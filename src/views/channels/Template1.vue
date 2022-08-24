<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">list列表</div>
      <div class="layui-col-md4">
        <hotlist />
        <ads />
        <links />
      </div>
    </div>
  </div>
</template>

<script>
import hotlist from '@/components/sidebar/HotList.vue'
import links from '@/components/sidebar/Links.vue'
import ads from '@/components/sidebar/Ads.vue'
export default {
  name: 'template1',
  components: {
    hotlist,
    links,
    ads
  }
}
</script>

<style></style>
